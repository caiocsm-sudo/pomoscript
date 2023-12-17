import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  color: "primary" | "secondary" | "special";
};

export default function Button({ children, color }: Button) {
  return (
    <button
      className={`default-btn ${
        color !== "primary" && color == "special" ? "special-btn" : "secondary"
      }`}
    >
      {children}
    </button>
  );
}
