import { verifyEmail } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const verifyToken = searchParams.get("token");
    if (verifyToken) {
      const verify = async () => {
        const data = await verifyEmail(verifyToken);
        console.log(data);
        if (data.success) {
          setVerificationStatus("success");
        } else {
          setVerificationStatus("failure");
          setMessage(data.message);
        }
      };

      verify();
    }
  }, []);
  return (
    <div className="h-screen bg-custom-neutral ">
      {verificationStatus === "success" && (
        <div className="h-full flex flex-col justify-center items-center text-lg font-semibold">
          <p>Xác nhận email thành công</p>
          <Link to={"/auth/login"} className="text-blue-600 cursor-pointer">
            Đăng nhập
          </Link>
        </div>
      )}
      {verificationStatus === "failure" && (
        <div className="flex justify-center items-center">
          <p className="text-center">{message}</p>
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
            <RectangleButton className={"w-full"}>Đăng nhập</RectangleButton>
          </form>
        </div>
      )}
      {!verificationStatus && <div>Verifying email...</div>}
    </div>
  );
};

export default VerifyEmail;
