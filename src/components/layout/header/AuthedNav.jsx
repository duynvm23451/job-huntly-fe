import { logOut } from "@/services/authenitcationService";
import React from "react";

const AuthedNav = () => {
  const handleClick = () => {
    logOut();
  };
  return (
    <div>
      AuthedHeader{" "}
      <button className="border-2 p-4" onClick={handleClick}>
        logout
      </button>
    </div>
  );
};

export default AuthedNav;
