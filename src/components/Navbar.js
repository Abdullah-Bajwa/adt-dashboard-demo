import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCaretDown,
  FaBell,
  FaSearch,
  FaQuestionCircle,
  FaUserAlt,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import NavProfilePicture from "./NavProfilePic";
import NotificationBar from "./NotificationBar";

const Navbar = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const [userName, setUserName] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setUserName("John Smith");
    }, 100);
  }, []);
  const [active, setActive] = useState(false);

  const updateNotificationCount = (count) => {
    setNotificationCount(count);
  };

  const toggleNotificationBar = () => {
    setActive(!active);
  };

  return (
    <nav>
      <a href="/">
        <img
          className="nav-logo"
          src={process.env.PUBLIC_URL + "/logo-adt.png"}
          alt=""
        />
      </a>
      {/*
      <ul>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Products <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Connected Models <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Clouds <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li>
          <a href="/">My Users</a>
        </li>
        <li>
          <a href="/">My Assets Graph</a>
        </li>
      </ul>
  */}

      {/* Search bar added here 
      <form id="search-form">
        <FaSearch />
        <input type="text" placeholder="Search..." className="search-bar" />
      </form>
      */}

      <ul>
        <li>
          <a className="notification-icon" onClick={toggleNotificationBar}>
            <FaBell />
            {notificationCount > 0 && (
              <div className="badge">{notificationCount}</div>
            )}
          </a>
        </li>

        <li>
          <a href="/help" title="Help">
            <FaQuestionCircle />
          </a>
        </li>
        <li>
          <div className="dropdown">
            <Link
              to="/profile"
              title="Profile"
              style={{ display: "flex", alignItems: "center" }}
            >
              <NavProfilePicture
                imageUrl={`${process.env.PUBLIC_URL}/johnsmith.jpg`}
              />{" "}
              {userName} <FaCaretDown />
            </Link>
            <div className="dropdown-user">
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to="/profile"
              >
                <FaUserAlt style={{ marginRight: "10px" }} /> Profile
              </Link>
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to="/logout"
              >
                <CiLogout style={{ color: "red", marginRight: "10px" }} />{" "}
                Logout
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <NotificationBar
        active={active}
        updateNotificationCount={updateNotificationCount}
      />
    </nav>
  );
};

export default Navbar;
