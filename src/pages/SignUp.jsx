import RectangleButton from "@/components/shared/RectangleButton";
import { signup } from "@/utils/http";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const role = useSelector((state) => state.role.role);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    formData.role = role;

    const responseData = await signup(formData);
    console.log(responseData);
  };
  return (
    <>
      <p className="text-lg font-semibold">
        <Link
          to={"/auth/login"}
          className="text-blue-600 cursor-pointer hover:text-custom-violet"
        >
          Tạo tài khoản mới
        </Link>{" "}
        hoặc{" "}
        <Link
          to={"/auth/signup"}
          className="text-blue-600 cursor-pointer hover:text-custom-violet"
        >
          đăng nhập
        </Link>
      </p>
      <p className="text-lg">để tiếp cận hàng ngàn việc làm</p>
      <form className="w-1/4 mt-8" onSubmit={handleSubmit}>
        <label className="text-lg font-medium">Email</label>
        <input
          className="w-full block mt-2 mb-4"
          placeholder="Nhập tài khoản email"
          type="email"
          name="email"
        />
        <label className="text-lg font-medium">Nhập họ và tên</label>
        <input
          className="w-full block mt-2 mb-4"
          placeholder="Nhập họ và tên"
          type="text"
          name="username"
        />
        <label className="text-lg font-medium">Mật khẩu</label>
        <input
          className="w-full block mt-2 mb-4"
          placeholder="Nhập mật khẩu"
          type="password"
          name="password"
        />
        <label className="text-lg font-medium">Xác nhận mật khẩu</label>
        <input
          className="w-full block mt-2 mb-8"
          placeholder="Nhập lại mật khẩu"
          type="password"
          name="passwordConfirmation"
        />

        <RectangleButton className={"w-full"}>Đăng ký</RectangleButton>
      </form>
    </>
  );
};

export default SignUp;
