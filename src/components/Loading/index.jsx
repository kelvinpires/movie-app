import LiveTvIcon from "@mui/icons-material/LiveTv";
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
      <LiveTvIcon style={{ fontSize: "8rem", color: "#fff" }} />
      <CircularProgress style={{ color: "#fff" }} />
    </div>
  );
}
