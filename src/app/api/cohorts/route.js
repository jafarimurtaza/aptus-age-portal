const DEFAULT_COHORTS_API_URL =
  "https://admin.afghangeeksedu.org/api/graduate-profiles/public/cohorts";
const LIVE_COHORTS_API_URL =
  process.env.COHORTS_API_URL || DEFAULT_COHORTS_API_URL;

// Allow short-term caching at the edge; adjust as needed.
export const revalidate = 60;

const FETCH_TIMEOUT_MS = 7000;

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}

function getPayloadArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.data)) return payload.data;
  return null;
}

export async function GET(request) {
  try {
    const response = await fetchWithTimeout(LIVE_COHORTS_API_URL, {
      headers: { Accept: "application/json" },
      method: "GET",
    });

    if (!response) {
      console.error("No response from cohorts API fetch");
      return Response.json({ error: "No response from cohorts API" }, { status: 502 });
    }

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Cohorts API error", response.status, text);
      return Response.json(
        { error: `Live cohorts API returned ${response.status}` },
        { status: response.status },
      );
    }

    let payload;
    try {
      payload = await response.json();
    } catch (error) {
      console.error("Invalid JSON from cohorts API", error);
      return Response.json({ error: "Invalid JSON from cohorts API" }, { status: 502 });
    }

    const data = getPayloadArray(payload);
    if (data === null) {
      console.error("Unexpected cohorts response shape", payload);
      return Response.json({ error: "Invalid cohorts API response" }, { status: 502 });
    }

    return Response.json(data);
  } catch (error) {
    if (error?.name === "AbortError") {
      console.error("Cohorts API fetch aborted/timed out", error);
      return Response.json({ error: "Cohorts API request timed out" }, { status: 504 });
    }

    console.error("Unexpected error fetching cohorts API", error);
    return Response.json({ error: "Unable to reach the live cohorts API" }, { status: 502 });
  }
}
