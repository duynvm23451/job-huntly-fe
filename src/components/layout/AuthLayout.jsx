import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-custom-neutral">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
