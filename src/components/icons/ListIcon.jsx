import React from "react";

const ListIcon = ({ isActive, ...props }) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2841_73095)">
        <path
          d="M11.9974 6.6665H9.33073C8.62349 6.6665 7.94521 6.94746 7.44511 7.44755C6.94501 7.94765 6.66406 8.62593 6.66406 9.33317V25.3332C6.66406 26.0404 6.94501 26.7187 7.44511 27.2188C7.94521 27.7189 8.62349 27.9998 9.33073 27.9998H22.6641C23.3713 27.9998 24.0496 27.7189 24.5497 27.2188C25.0498 26.7187 25.3307 26.0404 25.3307 25.3332V9.33317C25.3307 8.62593 25.0498 7.94765 24.5497 7.44755C24.0496 6.94746 23.3713 6.6665 22.6641 6.6665H19.9974"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.3333 4H14.6667C13.1939 4 12 5.19391 12 6.66667C12 8.13943 13.1939 9.33333 14.6667 9.33333H17.3333C18.8061 9.33333 20 8.13943 20 6.66667C20 5.19391 18.8061 4 17.3333 4Z"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 16H12.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.3359 16H20.0026"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 21.3335H12.0133"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.3359 21.3335H20.0026"
          stroke={isActive ? "#4640DE" : "#25324B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2841_73095">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ListIcon;
