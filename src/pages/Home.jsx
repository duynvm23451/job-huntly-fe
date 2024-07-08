import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import HomeGuest from "./guest/HomeGuest";

const Home = () => {
  const token = useRouteLoaderData("root");
  return (
    <>
      {!token && <HomeGuest />}
      {token && <p>Home</p>}
    </>
  );
};

export default Home;
