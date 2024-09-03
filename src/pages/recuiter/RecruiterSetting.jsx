import EditMembersRecruiterSection from "@/components/layout/section/setting/EditMembersRecruiterSection";
import EditOverviewRecruiterSection from "@/components/layout/section/setting/EditOverviewRecruiterSection";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecruiterSetting = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleChangeTab = (tab) => {
    // if (loggedInUser.company) {
    setTab(tab);
    // }
  };
  const [tab, setTab] = useState("overview"); // overview & social & members
  return (
    <div>
      <div className="mx-6 my-4 flex justify-between">
        <div className="flex items-center">
          {loggedInUser?.company && (
            <img
              src={loggedInUser.company.logo}
              alt="company logo"
              className="w-12 h-12 rounded-full mr-4"
            />
          )}

          <h1 className="text-xl font-bold">
            {loggedInUser?.company
              ? loggedInUser.company.name
              : "Không có công ty"}
          </h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <div className="px-6 pt-4 border-t-1 border-b-1 border-custom-neutral-2 grid grid-cols-12">
        <button
          className={`col-span-6 text-lg font-semibold pb-3 border-b-2 ${
            tab == "overview" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => handleChangeTab("overview")}
        >
          Tổng quan
        </button>
        <button
          className={`col-span-6 text-lg font-semibold pb-3 border-b-2 ${
            tab == "members" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => handleChangeTab("members")}
        >
          Thành viên
        </button>
      </div>
      <div className="px-6 pt-4">
        {tab == "overview" && <EditOverviewRecruiterSection />}
        {tab == "members" && <EditMembersRecruiterSection />}
      </div>
    </div>
  );
};

export default RecruiterSetting;
