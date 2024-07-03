import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Content from "@/components/shared/Content";
import RectangleButton from "@/components/shared/RectangleButton";

const HomeGuestHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-30 shadow-md">
      <Content className={"pt-4 flex"}>
        <Link to={"/"} className="mt-2">
          <img src={logo} alt="logo" className="w-40" />
        </Link>
        <menu className="ml-16 mt-4 h-fit">
          <ul className="flex text-lg font-semibold text-gray-600">
            <NavLink
              to={"/find-jobs"}
              className={({ isActive }) =>
                isActive
                  ? "pb-6 border-b-6 text-custom-violet border-custom-violet"
                  : "pb-6"
              }
            >
              Việc làm
            </NavLink>
            <NavLink
              to={"/companies"}
              className={({ isActive }) =>
                isActive
                  ? "ml-8 pb-6 border-b-6 text-custom-violet border-custom-violet"
                  : "ml-8 pb-6"
              }
            >
              Công ty
            </NavLink>
          </ul>
        </menu>
        <div className="ml-auto flex">
          <RectangleButton type={"white"}>Đăng nhập</RectangleButton>
          <div className="w-0.5 bg-gray-200 mx-4 mb-4" />
          <RectangleButton type={"violet"}>Đăng ký</RectangleButton>
        </div>
      </Content>
    </header>
  );
};

export default HomeGuestHeader;
