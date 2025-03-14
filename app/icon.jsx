import { ImageResponse } from "next/og";

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="256"
        height="256"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z"
          fill="#22c55e"
        />
        <path
          d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z"
          fill="#ffab00"
        />
        <path
          d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"
          fill="#ff3030"
        />
        <path
          d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334"
          fill="#00b8d9"
        />
        <path
          d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z"
          fill="#8e33ff"
        />
      </svg>
    ),
    {
      width: 256,
      height: 256,
    }
  );
}
