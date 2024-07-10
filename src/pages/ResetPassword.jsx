import RectangleButton from "@/components/shared/RectangleButton";
import { resetPassword } from "@/utils/http";
import React from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    const data = await resetPassword(token, formData);
    console.log(data);
  };

  return (
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
        <RectangleButton className={"w-full"}>Xác nhận</RectangleButton>
      </form>
    </div>
  );
};

export default ResetPassword;
