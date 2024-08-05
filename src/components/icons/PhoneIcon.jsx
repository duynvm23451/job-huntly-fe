import React from "react";

const PhoneIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2841_73079)">
        <path
          d="M21.3359 5.3335H10.6693C9.93289 5.3335 9.33594 5.93045 9.33594 6.66683V25.3335C9.33594 26.0699 9.93289 26.6668 10.6693 26.6668H21.3359C22.0723 26.6668 22.6693 26.0699 22.6693 25.3335V6.66683C22.6693 5.93045 22.0723 5.3335 21.3359 5.3335Z"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.6641 6.6665H17.3307"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16 22.6665V22.6798"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2841_73079">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcon;
