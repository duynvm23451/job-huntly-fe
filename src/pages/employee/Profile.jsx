import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="m-6 flex justify-between">
        <h1 className="text-2xl font-bold">Đơn ứng tuyển</h1>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <div className="px-6 pt-4 border-t-1 border-custom-neutral-2 grid grid-cols-12 space-x-6">
        <div className="h-screen bg-red-400 col-span-8"></div>
        <div className="h-screen bg-green-400 col-span-4"></div>
      </div>
    </div>
  );
};

export default Profile;
