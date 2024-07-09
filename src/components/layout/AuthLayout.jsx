import { EMPLOYEE, RECRUITER, roleActions } from "@/store/role-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const roleTab = useSelector((state) => state.role.role);
  return (
    <div className="bg-custom-neutral flex flex-col justify-center items-center pt-20 h-screen">
      <ul className="flex mb-8">
        <li
          className={`text-xl font-medium text-custom-violet px-3 py-1.5 rounded-sm cursor-pointer ${
            roleTab == EMPLOYEE && "bg-[#e9ebfd]"
          }`}
          onClick={() => dispatch(roleActions.changeRole(EMPLOYEE))}
        >
          Ứng viên
        </li>
        <li
          className={`text-xl font-medium text-custom-violet px-3 py-1.5 rounded-sm cursor-pointer ${
            roleTab == RECRUITER && "bg-[#e9ebfd]"
          }`}
          onClick={() => dispatch(roleActions.changeRole(RECRUITER))}
        >
          Công ty
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
