import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = !!localStorage.getItem("token");
  //console.log(localStorage.getItem("token"));

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
