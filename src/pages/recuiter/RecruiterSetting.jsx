import EditMembersRecruiterSection from "@/components/layout/section/setting/EditMembersRecruiterSection";
import EditOverviewRecruiterSection from "@/components/layout/section/setting/EditOverviewRecruiterSection";
import EditSocialLinksRecruiterSection from "@/components/layout/section/setting/EditSocialLinksRecruiterSection";
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
          <img
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h1 className="text-xl font-bold">Company JSC</h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Đăng xuất
        </button>
      </div>
      <div className="px-6 pt-4 border-t-1 border-b-1 border-custom-neutral-2 grid grid-cols-12">
        <button
          className={`col-span-4 text-lg font-semibold pb-3 border-b-2 ${
            tab == "overview" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => handleChangeTab("overview")}
        >
          Tổng quan
        </button>
        <button
          className={`col-span-4 text-lg font-semibold pb-3 border-b-2 ${
            tab == "social" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => handleChangeTab("social")}
        >
          Mạng xã hội
        </button>
        <button
          className={`col-span-4 text-lg font-semibold pb-3 border-b-2 ${
            tab == "members" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => handleChangeTab("members")}
        >
          Thành viên
        </button>
      </div>
      <div className="px-6 pt-4">
        {tab == "overview" && <EditOverviewRecruiterSection />}
        {tab == "social" && <EditSocialLinksRecruiterSection />}
        {tab == "members" && <EditMembersRecruiterSection />}
      </div>
    </div>
  );
};

export default RecruiterSetting;
