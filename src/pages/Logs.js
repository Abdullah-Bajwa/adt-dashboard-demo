import React, { useState } from "react";
import TableComponent from "../components/TableComponent";
import LogsTableComponent from "../components/LogsTableComponent";
const data = [
  { id: 1, user: "John", time: "2024-04-20 09:00:00", type: "Entry" },
  { id: 2, user: "Bob", time: "2024-04-20 09:15:00", type: "Exit" },
  { id: 3, user: "Alice", time: "2024-04-20 09:30:00", type: "SOS" },
  { id: 4, user: "John", time: "2024-04-20 09:45:00", type: "Entry" },
  { id: 5, user: "Bob", time: "2024-04-20 10:00:00", type: "Exit" },
  { id: 6, user: "Alice", time: "2024-04-20 10:15:00", type: "SOS" },
  { id: 7, user: "John", time: "2024-04-20 10:30:00", type: "Entry" },
  { id: 8, user: "Bob", time: "2024-04-20 10:45:00", type: "Exit" },
  { id: 9, user: "Alice", time: "2024-04-20 11:00:00", type: "SOS" },
  { id: 10, user: "John", time: "2024-04-20 11:15:00", type: "Entry" },
  { id: 11, user: "Bob", time: "2024-04-20 11:30:00", type: "Exit" },
  { id: 12, user: "Alice", time: "2024-04-20 11:45:00", type: "SOS" },
  { id: 13, user: "John", time: "2024-04-20 12:00:00", type: "Entry" },
  { id: 14, user: "Bob", time: "2024-04-20 12:15:00", type: "Exit" },
  { id: 15, user: "Alice", time: "2024-04-20 12:30:00", type: "SOS" },
  { id: 16, user: "John", time: "2024-04-20 12:45:00", type: "Entry" },
  { id: 17, user: "Bob", time: "2024-04-20 13:00:00", type: "Exit" },
  { id: 18, user: "Alice", time: "2024-04-20 13:15:00", type: "SOS" },
  { id: 19, user: "John", time: "2024-04-20 13:30:00", type: "Entry" },
  { id: 20, user: "Bob", time: "2024-04-20 13:45:00", type: "Exit" },
];

const Logs = () => {
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
      <h1>Logs</h1>
      <div className="assets-dashboard" style={{ maxWidth: "60vw" }}>
        <LogsTableComponent data={data} />
      </div>
    </div>
  );
};

export default Logs;
