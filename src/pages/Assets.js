import React, { useState } from "react";
import TableComponent from "../components/TableComponent";

const Assets = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
      }}
    >
      <h1>Users</h1>
      <div className="assets-dashboard" style={{ maxWidth: "60vw" }}>
        <TableComponent />
      </div>
    </div>
  );
};

export default Assets;
