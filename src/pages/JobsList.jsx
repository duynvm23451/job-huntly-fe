import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import FindJobsGuest from "@/pages/guest/FindJobsGuest";

const JobsList = () => {
  const token = useRouteLoaderData("root");
  return (
    <>
      {!token && <FindJobsGuest />}
      {token && <p>Authed Jobs Page</p>}
    </>
  );
};

export default JobsList;
