import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import FindJobsGuest from "@/pages/guest/FindJobsGuest";

const JobsList = () => {
  const token = useRouteLoaderData("root");
  return (
    <>
      <FindJobsGuest />
    </>
  );
};

export default JobsList;
