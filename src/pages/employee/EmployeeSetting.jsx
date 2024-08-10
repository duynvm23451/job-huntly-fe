import EditLoginEmployeeSection from "@/components/layout/section/setting/EditLoginEmployeeSection";
import EditProfileEmployeeSection from "@/components/layout/section/setting/EditProfileEmployeeSection";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSetting = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [tab, setTab] = useState("edit_profile"); // edit_profile & edit_login
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
      <div className="px-6 pt-4 border-t-1 border-b-1 border-custom-neutral-2 grid grid-cols-12">
        <button
          className={`col-span-6 text-lg font-semibold pb-3 border-b-2 ${
            tab == "edit_profile" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => setTab("edit_profile")}
        >
          Hồ sơ
        </button>
        <button
          className={`col-span-6 text-lg font-semibold pb-3 border-b-2 ${
            tab == "edit_login" ? "border-custom-violet" : "border-white"
          }`}
          onClick={() => setTab("edit_login")}
        >
          Thông tin đăng nhập
        </button>
      </div>
      <div className="px-6 pt-4">
        {tab == "edit_profile" && <EditProfileEmployeeSection />}
        {tab == "edit_login" && <EditLoginEmployeeSection />}
      </div>
    </div>
  );
};

export default EmployeeSetting;
