import { logOut } from "@/services/authenitcationService";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import HomeIcon from "@/components/icons/HomeIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ApplicationIcon from "@/components/icons/ApplicationIcon";
import SearchIcon2 from "@/components/icons/SearchIcon2";
import CompanyIcon2 from "@/components/icons/CompanyIcon2";
import PersonIcon from "@/components/icons/PersonIcon";
import SettingIcon from "@/components/icons/SettingIcon";

const AuthedNav = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    logOut();
  };
  return (
    <div>
      <div className="px-6 py-6 flex flex-col justify-between absolute left-0 top-0 bottom-0 w-64 bg-custom-gray border-r-1 border-x-custom-neutral-2 shadow-xl">
        <div>
          <Link to={"/"} className="mt-2">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
          <ul className="py-8 border-b-1 border-custom-neutral-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center text-lg font-medium mt-2 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
                }`
              }
            >
              <HomeIcon className="w-7 h-7 mr-4" isActive={"/" === pathname} />
              Dashboard
            </NavLink>
            <NavLink
              to={"/messages"}
              className={({ isActive }) =>
                `flex items-center text-lg font-medium mt-4 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
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
                `flex items-center text-lg font-medium mt-4 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
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
                `flex items-center text-lg font-medium mt-4 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
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
                `flex items-center text-lg font-medium mt-4 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
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
                `flex items-center text-lg font-medium mt-4 ${
                  isActive ? "text-custom-violet" : "text-gray-600"
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
          <NavLink
            to={"/setting"}
            className={({ isActive }) =>
              `flex items-center text-lg font-medium mt-6 ${
                isActive ? "text-custom-violet" : "text-gray-600"
              }`
            }
          >
            <SettingIcon
              className="w-7 h-7 mr-4"
              isActive={pathname.includes("/setting")}
            />
            Cài đặt
          </NavLink>
        </div>
        <div>
          <button className="border-2 p-4" onClick={handleClick}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthedNav;
