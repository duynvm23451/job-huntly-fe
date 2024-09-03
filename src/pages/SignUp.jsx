import RectangleButton from "@/components/shared/RectangleButton";
import { signup } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  const [isLoading, setIsLoading] = useState(false);

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
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        formData[key] = null;
      }
    }
    setIsLoading(true);
    try {
      const responseData = await signup(formData);
      toast.success(responseData.message, {
        position: "bottom-right",
      });
    } catch (error) {
      const dataError = error.response.data;
      if (dataError.code == 417) {
        const toastHtml = Object.entries(dataError.data)
          .map(([key, value]) => `<p>- ${key}: ${value}</p>`)
          .join("");
        const toastMessage = (
          <div dangerouslySetInnerHTML={{ __html: toastHtml }} />
        );
        toast.error(toastMessage, {
          position: "bottom-right",
        });
      } else {
        toast.error(dataError.message, {
          position: "bottom-right",
        });
      }
    }
    setIsLoading(false);
  };
  return (
    <>
      <ToastContainer />
      <p className="text-lg font-semibold">
        <Link
          to={"/auth/signup"}
          className="text-blue-600 cursor-pointer hover:text-custom-violet"
        >
          Tạo tài khoản mới
        </Link>{" "}
        hoặc{" "}
        <Link
          to={"/auth/login"}
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
          name="fullName"
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

        <RectangleButton className={"w-full"} disabled={isLoading}>
          {isLoading ? "Loading..." : "Đăng ký"}
        </RectangleButton>
      </form>
    </>
  );
};

export default SignUp;
