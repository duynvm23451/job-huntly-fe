import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import HomeGuest from "./guest/HomeGuest";
import EmployeeDashBoard from "@/pages/employee/EmployeeDashBoard";
import RecuiterDashBoard from "./recuiter/RecuiterDashBoard";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(loggedInUser);
  return (
    <>
      {!token && <HomeGuest />}
      {token && loggedInUser && loggedInUser.role === "EMPLOYEE" && (
        <EmployeeDashBoard />
      )}
      {token && loggedInUser && loggedInUser.role === "RECRUITER" && (
        <RecuiterDashBoard />
      )}
    </>
  );
};

export default Home;
