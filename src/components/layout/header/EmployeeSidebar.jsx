import ApplicationIcon from "@/components/icons/ApplicationIcon";
import CompanyIcon2 from "@/components/icons/CompanyIcon2";
import HomeIcon from "@/components/icons/HomeIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import SearchIcon2 from "@/components/icons/SearchIcon2";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const EmployeeSidebar = () => {
  const { pathname } = useLocation();
  return (
    <ul className="py-8 border-b-1 border-custom-neutral-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <HomeIcon className="w-7 h-7 mr-4" isActive={"/" === pathname} />
        Dashboard
      </NavLink>
      <NavLink
        to={"/messages"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <MessageIcon
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/messages")}
        />
        Tin nhắn
      </NavLink>
      <NavLink
        to={"/applications"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <ApplicationIcon
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/applications")}
        />
        Ứng tuyển
      </NavLink>
      <NavLink
        to={"/jobs"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <SearchIcon2
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/jobs")}
        />
        Việc làm
      </NavLink>
      <NavLink
        to={"/companies"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <CompanyIcon2
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/companies")}
        />
        Công ty
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <PersonIcon
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/profile")}
        />
        Hồ sơ
      </NavLink>
    </ul>
  );
};

export default EmployeeSidebar;
