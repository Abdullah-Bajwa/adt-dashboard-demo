import React, { useState, useMemo } from "react";
import { attendanceRecords } from "../data/attendance";
import ComplexLineGraph from "../components/ComplexLineGraph";
import ComplexBarGraph from "../components/ComplexBarGraph";

const AiConnectors = () => {
  function getSummaryOfTotalHoursAndEmployees() {
    const summary = {};

    attendanceRecords.forEach((record) => {
      const { date, timestamp, employeeId } = record;
      const entryTime = new Date(timestamp);
      const nextRecord = attendanceRecords.find(
        (r) =>
          r.date === date &&
          r.employeeId === employeeId &&
          r.timestamp > timestamp &&
          r.type === "exit"
      );
      if (nextRecord) {
        const exitTime = new Date(nextRecord.timestamp);
        const hoursWorked = (exitTime - entryTime) / (1000 * 60 * 60); // Convert milliseconds to hours
        summary[date] = summary[date] || { totalHours: 0, totalEmployees: 0 };
        summary[date].totalHours += hoursWorked;
        summary[date].totalEmployees++;
      }
    });

    return summary;
  }
  function getAttendanceRecord(summary) {
    const attendanceRecord = [];
    const today = new Date();
    for (let i = 30; i >= 0; i--) {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() - i);
      const dateString = currentDate.toISOString().split("T")[0];
      attendanceRecord.push(
        summary[dateString] ? summary[dateString].totalEmployees : 0
      );
    }
    return attendanceRecord;
  }

  function getHoursRecord(summary) {
    const hoursRecord = [];
    const today = new Date();
    for (let i = 30; i >= 0; i--) {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() - i);
      const dateString = currentDate.toISOString().split("T")[0];
      hoursRecord.push(
        summary[dateString] ? parseInt(summary[dateString].totalHours) : 0
      );
    }
    return hoursRecord;
  }

  // Example usage:
  const summary = getSummaryOfTotalHoursAndEmployees();
  console.log(summary);

  const attendanceRecordSummary = getAttendanceRecord(summary);
  console.log(attendanceRecordSummary);

  const hoursRecord = getHoursRecord(summary);
  console.log(hoursRecord);

  return (
    <div className="connector-dashboard">
      <div style={{ margin: "12px" }}>
        <ComplexBarGraph
          graphTitle={"Attendance Record"}
          dataSetIn={[
            {
              name: "Ind. Workdays",
              activity: attendanceRecordSummary,
              color: "#884DFF",
            },
          ]}
        />
      </div>
      <div style={{ margin: "12px" }}>
        <ComplexLineGraph
          graphTitle={"Working Hours Record"}
          dataSetIn={[
            {
              name: "Total Man-hours",
              activity: hoursRecord,
              color: "#884DFF",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AiConnectors;
