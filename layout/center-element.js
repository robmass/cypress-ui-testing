import React from "react";
export default ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "100vw",
    }}
  >
    {children}
  </div>
);
