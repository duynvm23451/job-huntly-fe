import RectangleButton from "@/components/shared/RectangleButton";
import { forgotPassword } from "@/utils/http";
import React, { useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    const email = formData.email;
    const data = await forgotPassword(email);

    console.log(data);
  };

  return (
    <div className="h-screen bg-custom-neutral ">
      <div className="h-full flex flex-col justify-center items-center text-lg font-semibold">
        <form className="w-1/4" onSubmit={handleSubmit}>
          <label className="text-lg font-medium">
            Nhập email để gửi link tạo mật khẩu mới
          </label>
          <input
            className="w-full block mt-2 mb-4"
            placeholder="Nhập tài khoản email"
            type="email"
            name="email"
          />
          <RectangleButton className={"w-full"}>Xác nhận</RectangleButton>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
