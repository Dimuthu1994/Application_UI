import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Clear any other user-specific data
    navigate("/login");
  };

  return (
    <button className="btn btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
