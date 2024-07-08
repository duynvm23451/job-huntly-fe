import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import CompaniesGuest from "@/pages/guest/CompaniesGuest";

const CompaniesList = () => {
  const token = useRouteLoaderData("root");

  return (
    <>
      {!token && <CompaniesGuest />}
      {token && <p>Authed Companies Page</p>}
    </>
  );
};

export default CompaniesList;
