import React, { useRef, useState, useEffect } from "react";

const NotificationBar = ({ active, updateNotificationCount }) => {
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);
  const notifBarRef = useRef(null);

  // Sample notifications
  const sampleNotifications = [
    { text: "Alice entered the premises.", type: "entry" },
    { text: "Alice exited the premises.", type: "exit" },
    { text: "SOS Triggered: Alice!", type: "sos" },
    { text: "User 1 entered the premises.", type: "entry" },
    { text: "Bob exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 1!", type: "sos" },
    { text: "User 4 entered the premises.", type: "entry" },
    { text: "User 5 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 4!", type: "sos" },
    { text: "Bob entered the premises.", type: "entry" },
    { text: "User 1 exited the premises.", type: "exit" },
    { text: "SOS Triggered: Bob!", type: "sos" },
    { text: "User 5 entered the premises.", type: "entry" },
    { text: "User 4 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 5!", type: "sos" },
    { text: "User 6 entered the premises.", type: "entry" },
    { text: "User 7 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 6!", type: "sos" },
    { text: "User 8 entered the premises.", type: "entry" },
    { text: "User 9 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 8!", type: "sos" },
    { text: "User 7 entered the premises.", type: "entry" },
    { text: "User 6 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 7!", type: "sos" },
    { text: "User 10 entered the premises.", type: "entry" },
    { text: "User 9 exited the premises.", type: "exit" },
    { text: "SOS Triggered: User 10!", type: "sos" },
    // Add more objects as needed
  ];

  // Function to add a notification to the queue
  const addNotification = (notification) => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const date = new Date(timestamp);

    const readableTimestamp = date.toLocaleString(); // Convert timestamp to human-readable string

    const notificationWithTimestamp = {
      ...notification,
      timestamp: readableTimestamp,
    }; // Add timestamp to notification
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notificationWithTimestamp,
    ]);
    if (notifBarRef.current) {
      notifBarRef.current.scroll({
        top: notifBarRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Function to remove the first notification from the queue
  const removeNotifications = () => {
    setNotifications([]);
  };

  useEffect(() => {
    updateNotificationCount(notifications.length);
  }, [notifications]);

  useEffect(() => {
    setVisible(active);
    if (!active) {
      removeNotifications();
    }
    const interval = setInterval(() => {
      console.log("running interval-notifications");
      if (sampleNotifications.length > 0) {
        addNotification(sampleNotifications.shift());
      }
    }, 10000); // Add a notification every 10 seconds

    return () => {
      console.log("clearing interval-notifications");
      clearInterval(interval);
    };
  }, [active]);

  /*useEffect(() => {
    if (notifications.length > 0) {
      setTimeout(() => {
        removeNotification();
      }, 5000); // Remove the notification after 5 seconds
    }
  }, [notifications]);*/

  return (
    <div
      className={`notif-bar-container ${visible ? "active" : ""}`}
      ref={notifBarRef}
    >
      <div className="notif-bar">
        <ul className="notif-bar-list">
          {notifications.map((notification, index) => (
            <li key={index} className={`notif-item ${notification.type}`}>
              <span className="text">{notification.text}</span>
              <span className="timestamp">{notification.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBar;
