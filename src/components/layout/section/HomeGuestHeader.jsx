import logo from "../../../assets/logo.svg";
import Content from "../../shared/Content";
import RectangleButton from "../../shared/RectangleButton";

const HomeGuestHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-20">
      <Content className={"pt-6 flex"}>
        <img src={logo} alt="logo" className="w-52 pb-6" />
        <menu className="ml-16 mt-4 h-fit">
          <ul className="flex text-2xl font-semibold text-gray-600">
            <li>Việc làm</li>
            <li className="ml-8 pb-8 border-b-6 text-custom-violet border-custom-violet">
              Công ty
            </li>
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
