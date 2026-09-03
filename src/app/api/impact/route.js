export async function GET() {
  try {
    const res = await fetch(process.env.LMS_API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        { error: `LMS API responded with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch LMS data", details: error.message },
      { status: 500 }
    );
  }
}