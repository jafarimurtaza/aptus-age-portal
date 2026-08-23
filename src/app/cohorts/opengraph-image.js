import { ImageResponse } from "next/og";

export const alt = "Afghan Geeks cohorts";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #091b1f 0%, #0f2f34 35%, #123d5a 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(248, 196, 92, 0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(116, 227, 174, 0.18), transparent 30%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "86%",
            padding: "56px 64px",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 32,
            background: "rgba(8, 19, 24, 0.56)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 18,
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#B9F2D0",
              fontWeight: 700,
            }}
          >
            Afghan Geeks
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            Cohorts
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760,
            }}
          >
            Discover the growing community of builders, designers, and future leaders shaping Afghanistan’s digital talent pipeline.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 36,
              fontSize: 22,
              color: "#F7D38F",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(247, 211, 143, 0.14)",
                border: "1px solid rgba(247, 211, 143, 0.35)",
              }}
            >
              Talent • Skills • Community
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
