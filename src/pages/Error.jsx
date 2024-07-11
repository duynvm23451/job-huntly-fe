import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <div className="h-screen bg-cyan-300">Error</div>;
};

export default Error;
