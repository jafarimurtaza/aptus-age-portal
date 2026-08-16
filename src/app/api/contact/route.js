export async function POST(request) {
  try {
    const body = await request.json();

    console.log("Received contact form:", body);

    return Response.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to process the request.",
      },
      {
        status: 500,
      },
    );
  }
}
