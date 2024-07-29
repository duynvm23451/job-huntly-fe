import React from "react";

const PinIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2841_73104)">
        <path
          d="M20.0026 6L14.6693 11.3333L9.33594 13.3333L7.33594 15.3333L16.6693 24.6667L18.6693 22.6667L20.6693 17.3333L26.0026 12"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 20L6 26"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.3359 5.3335L26.6693 12.6668"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2841_73104">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PinIcon;
