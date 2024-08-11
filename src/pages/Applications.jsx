import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import EmployeeApplications from "./employee/EmployeeApplications";
import RecruiterApplications from "./recuiter/RecruiterApplications";

const Applications = () => {
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();
  if (!token) {
    window.location.href = "/";
  }
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <>
      {loggedInUser && loggedInUser.role == "EMPLOYEE" && (
        <EmployeeApplications />
      )}
      {loggedInUser && loggedInUser.role == "RECRUITER" && (
        <RecruiterApplications />
      )}
    </>
  );
};

export default Applications;
