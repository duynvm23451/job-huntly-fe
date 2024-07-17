import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import HomeGuest from "./guest/HomeGuest";
import DashBoard from "./employee/DashBoard";

const Home = () => {
  const token = useRouteLoaderData("root");
  return (
    <>
      {!token && <HomeGuest />}
      {token && <DashBoard />}
    </>
  );
};

export default Home;
