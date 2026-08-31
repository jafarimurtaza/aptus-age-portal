const API_URL =
  process.env.COHORTS_API_URL ||
  "https://admin.afghangeeksedu.org/api/graduate-profiles/public/cohorts";

// Allow short-term caching at the edge; adjust as needed.
export const revalidate = 60;

const FETCH_TIMEOUT_MS = 7000;

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, { signal: controller.signal, ...opts });
    return response;
  } finally {
    clearTimeout(id);
  }
}

export async function GET(request) {
  try {
    const response = await fetchWithTimeout(API_URL, {
      // short-circuit Next's cache behavior using `revalidate` above
      headers: { Accept: "application/json" },
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

    // guard against invalid JSON
    let payload;
    try {
      payload = await response.json();
    } catch (e) {
      console.error("Invalid JSON from cohorts API", e);
      return Response.json({ error: "Invalid JSON from cohorts API" }, { status: 502 });
    }

    return Response.json(payload);
  } catch (err) {
    // distinguish abort/timeouts from other errors
    if (err.name === "AbortError") {
      console.error("Cohorts API fetch aborted/timed out", err);
      return Response.json({ error: "Cohorts API request timed out" }, { status: 504 });
    }
    console.error("Unexpected error fetching cohorts API", err);
    return Response.json({ error: "Unable to reach the live cohorts API" }, { status: 502 });
  }
}
