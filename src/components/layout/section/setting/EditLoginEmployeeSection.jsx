import TickIcon from "@/components/icons/TickIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import React from "react";

const EditLoginEmployeeSection = () => {
  return (
    <div className="col-span-12">
      <p className="mt-4 text-lg font-semibold">Thông tin đăng nhập</p>
      <p className="mb-6">
        Đây là nơi bạn có thể chỉnh sửa thông tin đăng nhập của bản thân
      </p>
      <div className="border-t-1 border-custom-neutral-2 pt-4 pb-6 grid grid-cols-12">
        <div className="col-span-4">
          <p className="font-semibold">Cập nhật địa chỉ email</p>
          <p>Địa chỉ email là thông tin dùng để đăng nhập</p>
          <p>Chắc chắn rằng bạn muốn đổi email</p>
        </div>
        <form className="col-span-8">
          <p className="font-semibold flex">
            duynvm1711@gmail.com
            <TickIcon className="w-6 h-6 ml-2" />
          </p>
          <p className="mb-4">Địa chỉ email của bạn đã được xác thực</p>
          <label className="font-semibold">Thay đổi Email</label>
          <input className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block" />
          <RectangleButton className="mt-4">Xác nhận</RectangleButton>
        </form>
      </div>
      <div className="border-t-1 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-4">
          <p className="font-semibold">Thay đổi mật khẩu</p>
          <p>Chắc chắn rằng bạn muốn đổi mật khẩu</p>
        </div>
        <form className="col-span-8">
          <label className="font-semibold">Mật khẩu cũ</label>
          <input className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block" />
          <p className="text-sm text-gray-600 mt-1 mb-6">Tối thiểu 8 kí tự</p>
          <label className="font-semibold">Mật khẩu mới</label>
          <input className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block" />
          <p className="text-sm text-gray-600 mt-1">Tối thiểu 8 kí tự</p>
          <RectangleButton className="mt-4">Xác nhận</RectangleButton>
        </form>
      </div>
    </div>
  );
};

export default EditLoginEmployeeSection;
