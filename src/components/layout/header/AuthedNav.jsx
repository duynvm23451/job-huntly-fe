import { logOut } from "@/services/authenitcationService";
import React, { useEffect } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useRouteLoaderData,
} from "react-router-dom";
import logo from "@/assets/logo.svg";
import SettingIcon from "@/components/icons/SettingIcon";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "@/utils/http";
import { userActions } from "@/store/user-slice";
import defaultAvatar from "@/assets/image/default-avatar.png";
import EmployeeSidebar from "./EmployeeSidebar";
import RecruiterSideBar from "./RecruiterSideBar";

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
  return (
    <div>
      <div className="px-6 py-6 flex flex-col justify-between absolute left-0 top-0 bottom-0 w-64 bg-custom-gray border-r-1 border-x-custom-neutral-2 shadow-xl">
        <div>
          <Link to={"/"} className="mt-2">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
          {loggedInUser && loggedInUser.role == "EMPLOYEE" && (
            <EmployeeSidebar />
          )}
          {loggedInUser && loggedInUser.role == "RECRUITER" && (
            <RecruiterSideBar />
          )}
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
