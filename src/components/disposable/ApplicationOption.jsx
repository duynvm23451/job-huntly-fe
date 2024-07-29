import React, { useState } from "react";
import ThreeDotIcon from "../icons/ThreeDotIcon";

const ApplicationOption = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        <ThreeDotIcon />
      </button>
      <div
        className={`w-24 py-2 px-3 rounded-lg bg-white border-1 border-custom-neutral-2 absolute flex flex-col items-start -bottom-12 z-10 right-8 ${
          display ? "block" : "hidden"
        }`}
      >
        <button className="border-b-1 border-custom-neutral-2 w-full text-left pb-1">
          Nhắn tin
        </button>
        <button className="pt-1">Hủy đơn</button>
      </div>
    </>
  );
};

export default ApplicationOption;
