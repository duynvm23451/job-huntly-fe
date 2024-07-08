import GoogleIcon from "@/components/icons/GoogleIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import { OAuth2ConfigGoogle } from "@/configurations/configuration";
import { EMPLOYEE, RECRUITER, roleActions } from "@/store/role-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const handleClick = () => {
    const callbackUrl = OAuth2ConfigGoogle.redirectUri;
    const authUrl = OAuth2ConfigGoogle.authUri;
    const googleClientId = OAuth2ConfigGoogle.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };
  return (
    <>
      <p className="text-lg font-semibold">
        <span className="text-blue-600">Tạo tài khoản mới</span> hoặc{" "}
        <span className="text-blue-600">đăng nhập</span>
      </p>
      <p className="text-lg">để tiếp cận hàng ngàn việc làm</p>
      <button
        onClick={handleClick}
        className="text-lg font-bold text-custom-violet flex justify-center items-center w-1/4 pb-1.5 pt-2 mt-8 border-1 border-custom-neutral-2"
      >
        <GoogleIcon className="w-8 h-8 mr-4" />
        Đăng nhập với Google
      </button>
      <div className="flex items-end justify-between w-1/4 my-4">
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
        <span>Hoặc đăng nhập bằng email</span>
        <div className="w-20 h-0.5 bg-custom-neutral-2 mb-2" />
      </div>
      <form className="w-1/4">
        <label className="text-lg font-medium">Email</label>
        <input
          className="w-full block mt-2 mb-4"
          placeholder="Nhập tài khoản email"
          type="email"
        />
        <label className="text-lg font-medium">Mật khẩu</label>
        <input
          className="w-full block mt-2 mb-8"
          placeholder="Nhập tài khoản email"
          type="password"
        />
        <RectangleButton className={"w-full"}>Đăng nhập</RectangleButton>
      </form>
    </>
  );
};

export default Login;
