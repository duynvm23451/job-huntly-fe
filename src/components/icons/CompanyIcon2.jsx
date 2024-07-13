import React from "react";

const CompanyIcon2 = ({ isActive, ...props }) => {
  return (
    <svg
      {...props}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2841_73050)">
        <path
          d="M4.57031 28H28.5703"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.23438 28V9.33333L17.901 4V28"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.9063 28.0002V14.6668L17.9062 9.3335"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5703 12V12.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5703 16V16.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5703 20V20.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5703 24V24.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2841_73050">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.570312)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CompanyIcon2;
