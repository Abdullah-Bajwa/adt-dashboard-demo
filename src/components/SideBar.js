import { IoIosStats } from "react-icons/io";
import { RiRoadMapFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="link" to="/">
            <div className="sidebar-icon">
              <RiRoadMapFill />
            </div>
            <div className="no-wrap" href="/dashboard">
              Dashboard
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/connectors">
            <div className="sidebar-icon">
              <IoIosStats />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              Stats
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/assets">
            <div className="sidebar-icon">
              <BsFillPeopleFill />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              Users
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/investigate">
            <div className="sidebar-icon">
              <AiOutlineFileSearch />
            </div>
            <div href="/dashboard/investigate">Logs</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
