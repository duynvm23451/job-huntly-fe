import { logOut } from "@/services/authenitcationService";
import React, { useEffect } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useRouteLoaderData,
} from "react-router-dom";
import logo from "@/assets/logo.svg";
import HomeIcon from "@/components/icons/HomeIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ApplicationIcon from "@/components/icons/ApplicationIcon";
import SearchIcon2 from "@/components/icons/SearchIcon2";
import CompanyIcon2 from "@/components/icons/CompanyIcon2";
import PersonIcon from "@/components/icons/PersonIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "@/utils/http";
import { userActions } from "@/store/user-slice";
import defaultAvatar from "@/assets/image/default-avatar.png";

const AuthedNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root");

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const response = await getMyInfo(token);
        if (response.data) {
          dispatch(userActions.updateUser(response.data));
        }
      };
      fetchData();
    }
  }, [token, dispatch]);

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(loggedInUser);
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
                `flex items-center text-lg font-medium p-2 ${
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
                  isActive
                    ? "text-custom-violet bg-violet-100"
                    : "text-gray-600"
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
              `flex items-center text-lg font-medium mt-4 p-2 ${
                isActive ? "text-custom-violet bg-violet-100" : "text-gray-600"
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
        {loggedInUser && (
          <div>
            <div className="flex mb-2 items-center">
              {!loggedInUser.avatarFileName && (
                <img
                  src={defaultAvatar}
                  alt="default avatar"
                  className="w-10 h-10 mr-4 rounded-full"
                />
              )}
              {loggedInUser.avatarFileName && (
                <img
                  src={loggedInUser.avatarFileName}
                  alt="avatar"
                  className="w-10 h-10 mr-4 rounded-full"
                />
              )}
              <button
                className="border-2 rounded-md p-3 pt-1.5 pb-2 border-custom-violet"
                onClick={handleClick}
              >
                Đăng xuất
              </button>
            </div>

            <div className="flex flex-col">
              <strong>{loggedInUser.fullName}</strong>
              <span>{loggedInUser.email}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthedNav;
