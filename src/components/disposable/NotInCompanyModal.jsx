import React from "react";
import { useNavigate } from "react-router-dom";
import RectangleButton from "../shared/RectangleButton";

const NotInCompanyModal = () => {
  const navigate = useNavigate();
  const hanlderClick = () => {
    navigate("/setting");
  };
  return (
    <div className="h-screen w-full bg-custom-neutral flex justify-center items-center">
      <div className="p-8 rounded-lg shadow-lg border-1 bg-white text-center">
        <h3 className="text-2xl font-bold">Bạn vẫn chưa thuộc công ty nào</h3>
        <p className="mt-4 text-lg text-gray-800">
          Nhấp chuột vào nút bên dưới để tạo hồ sơ công ty <br />
          <strong className="text-custom-violet">Hoặc</strong>
          <br /> Đợi người khác mời vào công ty
        </p>
        <RectangleButton className="mt-4" onClick={hanlderClick}>
          Tạo hồ sơ công ty
        </RectangleButton>
      </div>
    </div>
  );
};

export default NotInCompanyModal;
