import React from "react";

const SeeApplicationButton = ({ ...props }) => {
  return (
    <button
      {...props}
      className="border-1 border-custom-violet-2 text-custom-violet-2 font-semibold bg-violet-100 px-3 py-1.5"
    >
      Xem ứng viên
    </button>
  );
};

export default SeeApplicationButton;
