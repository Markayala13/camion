import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5b2a86",
          color: "#e8a800",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "-1px",
          fontFamily: "sans-serif",
          borderRadius: 6,
        }}
      >
        MC
      </div>
    ),
    { ...size },
  );
}
