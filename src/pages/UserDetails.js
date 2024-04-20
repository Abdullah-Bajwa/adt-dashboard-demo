import React, { useState, useEffect } from "react";
import ComplexPiChart from "../components/ComplexPiChart";
import { attendanceRecords } from "../data/attendance";
import ComplexLineGraph from "../components/ComplexLineGraph";
import ComplexBarGraph from "../components/ComplexBarGraph";

const UserDetails = ({ userId }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});

  // Hardcoded data array
  const data = [
    {
      name: "Alice",
      surname: "Smith",
      badge_id: "A123",
      id: "EMP001",
      designation: "Software Engineer",
    },
    {
      name: "Bob",
      surname: "Johnson",
      badge_id: "B456",
      id: "EMP002",
      designation: "Data Scientist",
    },
    // Other user objects...
  ];

  useEffect(() => {
    const user = data.find((user) => user.id === userId);
    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(null);
      alert("User not found!");
    }
  }, [userId]);

  const handleEdit = () => {
    setEditedDetails({ ...userDetails });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Handle saving changes to the server
    // For now, let's just log the edited details
    console.log("Edited details:", editedDetails);
    setShowModal(false);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

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
  const summary = getSummaryOfTotalHoursAndEmployees();
  console.log(summary);

  const hoursRecord = getHoursRecord(summary);
  console.log(hoursRecord);

  if (!userDetails) {
    return (
      <p className="user-details-not-found">No user found with ID: {userId}</p>
    );
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="row">
        <div className="user-details-info">
          <p>
            <span className="user-details-label">Name:</span>
            <span className="user-details-value">{userDetails.name}</span>
          </p>
          <p>
            <span className="user-details-label">Surname:</span>{" "}
            <span className="user-details-value">{userDetails.surname}</span>
          </p>
          <p>
            <span className="user-details-label">ID:</span>
            <span className="user-details-value">{userDetails.id}</span>
          </p>
          <p>
            <span className="user-details-label">Badge ID:</span>{" "}
            <span className="user-details-value">{userDetails.badge_id}</span>
          </p>
          <p>
            <span className="user-details-label">Designation:</span>{" "}
            <span className="user-details-value">
              {userDetails.designation}
            </span>
          </p>
          <button className="user-details-edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            maxWidth: "40vw",
            width: "30vw",
            marginLeft: "100px",
          }}
        >
          <ComplexPiChart graphTitle={"Attendance Summary"} />
        </div>
      </div>
      <br />
      <div style={{ margin: "12px", maxWidth: "45vw", marginTop: "50px" }}>
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

      {showModal && (
        <div className="user-details-modal">
          <div className="user-details-modal-content">
            <span className="user-details-close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Edit User Details</h2>
            <form>
              <label className="user-details-label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={editedDetails.name}
                  onChange={handleFieldChange}
                  className="user-details-value"
                />
              </label>
              <label className="user-details-label">
                Surname:
                <input
                  type="text"
                  name="surname"
                  value={editedDetails.surname}
                  onChange={handleFieldChange}
                  className="user-details-value"
                />
              </label>
              <label className="user-details-label">
                ID:
                <input
                  type="text"
                  name="id"
                  value={editedDetails.id}
                  onChange={handleFieldChange}
                  className="user-details-value"
                  disabled
                />
              </label>
              <label className="user-details-label">
                Badge ID:
                <input
                  type="text"
                  name="badge_id"
                  value={editedDetails.badge_id}
                  onChange={handleFieldChange}
                  className="user-details-value"
                />
              </label>
              <label className="user-details-label">
                Designation:
                <input
                  type="text"
                  name="designation"
                  value={editedDetails.designation}
                  onChange={handleFieldChange}
                  className="user-details-value"
                />
              </label>
              <button
                className="user-details-save-btn"
                type="button"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
