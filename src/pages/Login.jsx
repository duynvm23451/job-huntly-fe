import GoogleIcon from "@/components/icons/GoogleIcon";
import React, { useState } from "react";

const Login = () => {
  const [tab, setTab] = useState("employee");

  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex mb-8">
        <li
          className={`text-xl font-medium text-custom-violet px-3 py-1.5 rounded-sm cursor-pointer ${
            tab == "employee" && "bg-[#e9ebfd]"
          }`}
          onClick={() => setTab("employee")}
        >
          Ứng viên
        </li>
        <li
          className={`text-xl font-medium text-custom-violet px-3 py-1.5 rounded-sm cursor-pointer ${
            tab == "company" && "bg-[#e9ebfd]"
          }`}
          onClick={() => setTab("company")}
        >
          Công ty
        </li>
      </ul>
      <p className="text-lg font-semibold">
        <span className="text-blue-600">Tạo tài khoản mới</span> hoặc{" "}
        <span className="text-blue-600">đăng nhập</span>
      </p>
      <p className="text-lg">để tiếp cận hàng ngàn việc làm</p>
      <button className="text-lg font-bold text-custom-violet flex justify-center items-center w-1/4 pb-1.5 pt-2 mt-8 border-1 border-custom-neutral-2">
        <GoogleIcon className="w-8 h-8 mr-4" />
        Đăng nhập với Google
      </button>
      <p className="flex items-end justify-between w-1/4 my-4">
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
        <span>Hoặc đăng nhập bằng email</span>
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
      </p>
      <form></form>
    </div>
  );
};

export default Login;
