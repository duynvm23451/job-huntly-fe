import CompanyIcon2 from "@/components/icons/CompanyIcon2";
import HomeIcon from "@/components/icons/HomeIcon";
import ListIcon from "@/components/icons/ListIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import People2Icon from "@/components/icons/People2Icon";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const RecruiterSideBar = () => {
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
        to={"/edit-company"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <CompanyIcon2
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("company")}
        />
        Công ty
      </NavLink>
      <NavLink
        to={"/applications"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <People2Icon
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/applications")}
        />
        Ứng viên
      </NavLink>
      <NavLink
        to={"/jobs-list"}
        className={({ isActive }) =>
          `flex items-center text-lg font-medium p-2 mt-1 ${
            isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
          }`
        }
      >
        <ListIcon
          className="w-7 h-7 mr-4"
          isActive={pathname.includes("/companies")}
        />
        Công việc
      </NavLink>
    </ul>
  );
};

export default RecruiterSideBar;
