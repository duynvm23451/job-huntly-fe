import React from "react";

const SearchIcon2 = ({ isActive, ...props }) => {
  return (
    <svg
      {...props}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15.8285"
        cy="15.6888"
        r="11.9847"
        stroke={isActive ? "#4640DE" : "#25324B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        d="M24.1641 24.647L28.8628 29.3335"
        stroke={isActive ? "#4640DE" : "#25324B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default SearchIcon2;
