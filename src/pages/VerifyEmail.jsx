import WarningIcon from "@/components/icons/WarningIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import { resendVerifyEmail, verifyEmail } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [message, setMessage] = useState("")
  useEffect(() => {
    const verifyToken = searchParams.get("token");
    if (verifyToken) {
      const verify = async () => {
        try {
          const data = await verifyEmail(verifyToken);
          setVerificationStatus("success")
          setMessage(data.message)
        } catch (error) {
          const errorData = error.response.data;
          setVerificationStatus("failure")
          setMessage(errorData.message)
        }
      };
      verify();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    setIsLoading(true)
    try {
      const data = await resendVerifyEmail(formData.email)
      toast.success(data.message, {
        position: "bottom-right"
      })
    } catch (error) {
      const errorData = error.response.data;
      toast.error(errorData.message, {
        position: "bottom-right"
      })
    }
    setIsLoading(false)
  }
  return (
    <div className="h-screen bg-custom-neutral ">
      <ToastContainer/>
      {verificationStatus === "success" && (
        <div className="h-full flex flex-col justify-center items-center text-lg font-semibold">
          <p>Xác nhận email thành công</p>
          <Link to={"/auth/login"} className="text-blue-600 cursor-pointer">
            Đăng nhập
          </Link>
        </div>
      )}
      {verificationStatus === "failure" && (
        <div className="h-full flex flex-col justify-center items-center">
          <WarningIcon className="w-20 h-20 mb-4 text-center" />
          <p className="text-center text-xl font-medium text-red-500 mb-4">{message}</p>
          <form className="w-1/4" onSubmit={handleSubmit}>
            <label className="text-lg font-medium">
              Nhập email để gửi lại mail xác thực
            </label>
            <input
              className="w-full block mt-2 mb-4"
              placeholder="Nhập tài khoản email"
              type="email"
              name="email"
            />
            <RectangleButton className={"w-full"} disabled={isLoading}>{isLoading ? "Loading..." : "Xác nhận"}</RectangleButton>
          </form>
        </div>
      )}
      {!verificationStatus && <div>Verifying email...</div>}
    </div>
  );
};

export default VerifyEmail;
