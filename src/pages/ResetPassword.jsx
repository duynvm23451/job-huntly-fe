import RectangleButton from "@/components/shared/RectangleButton";
import { resetPassword } from "@/utils/http";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    setIsLoading(true)
    try {
      const data = await resetPassword(token, formData);
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
    
  };

  return (
    <>
      <ToastContainer/>
      <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-lg font-semibold">
        <form className="w-1/4" onSubmit={handleSubmit}>
          <label className="text-lg font-medium">Nhập mật khẩu</label>
          <input
            className="w-full block mt-2 mb-4"
            placeholder="Nhập mật khẩu"
            type="password"
            name="password"
          />
          <label className="text-lg font-medium">Nhập lại mật khẩu</label>
          <input
            className="w-full block mt-2 mb-4"
            placeholder="Xác nhận mật khẩu"
            type="password"
            name="passwordConfirmation"
          />
          <RectangleButton className={"w-full"} disabled={isLoading}>{isLoading ? "Loading..." : "Xác nhận"}</RectangleButton>
        </form>
      </div>
    </>
     
  );
};

export default ResetPassword;
