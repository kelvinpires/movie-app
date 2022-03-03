import { FaDev } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import React from "react";

export function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030b17",
        position: "fixed",
        zIndex: 999,
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            color: "white",
            fontWeight: "600",
          }}
        >
          Movie.
        </h1>
        <FaDev size="6rem" color="#fff" />
      </div>
      <CircularProgress style={{ color: "#fff" }} />
    </div>
  );
}
