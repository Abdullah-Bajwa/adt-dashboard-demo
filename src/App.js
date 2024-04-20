import React, { useState, useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import AiConnectors from "./pages/AiConnectors";
import Store from "./pages/Store";
import Assets from "./pages/Assets";
import Settings from "./pages/Settings";
import Investigate from "./pages/Investigate";
import Marketplace from "./pages/Marketplace";
import RequestSignup from "./pages/RequestSignup";
import Cookies from "js-cookie";
import Signup from "./pages/Signup";
import Policies from "./pages/Policies";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails.js";
import Logs from "./pages/Logs";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const UserDetailsPage = () => {
    const { userId } = useParams();

    return <UserDetails userId={userId} />;
  };

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (token) => {
    // Calculate the expiration time for the cookie (15 minutes from now)
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 15 * 60 * 1000); // 15 minutes in milliseconds

    // Set the token as a cookie with the calculated expiry time
    Cookies.set("auth_token", token, { expires: expirationTime });

    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home isLoggedIn={isLoggedIn} logout={logout} />}
      >
        <Route index element={<Dashboard />} />
        <Route path="/connectors" element={<AiConnectors />} />
        <Route path="/store" element={<Store />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/investigate" element={<Logs />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details/:userId" element={<UserDetailsPage />} />
      </Route>

      <Route path="/signup" element={<RequestSignup />} />
      <Route path="/complete-signup" element={<Signup />} />
      <Route path="/market" element={<Marketplace />} />
      <Route
        path="/login"
        element={<Login login={login} isLoggedIn={isLoggedIn} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function AppWithRouter() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default AppWithRouter;
