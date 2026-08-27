const API_URL =
  "https://admin.afghangeeksedu.org/api/graduate-profiles/public/cohorts";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return Response.json(
        { error: `Live cohorts API returned ${response.status}` },
        { status: response.status },
      );
    }

    const payload = await response.json();
    return Response.json(payload);
  } catch {
    return Response.json(
      { error: "Unable to reach the live cohorts API" },
      { status: 502 },
    );
  }
}
