import React from "react";

const MailIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2841_73075)">
        <path
          d="M25.9036 6.6665H7.23698C5.76422 6.6665 4.57031 7.86041 4.57031 9.33317V22.6665C4.57031 24.1393 5.76422 25.3332 7.23698 25.3332H25.9036C27.3764 25.3332 28.5703 24.1393 28.5703 22.6665V9.33317C28.5703 7.86041 27.3764 6.6665 25.9036 6.6665Z"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.57031 9.3335L16.5703 17.3335L28.5703 9.3335"
          stroke="#25324B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2841_73075">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.570312)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;
