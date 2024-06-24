import Content from "@/components/shared/Content";
import logo from "@/assets/logo-white.svg";
import RectangleInput from "@/components/shared/RectangleInput";
import RectangleButton from "@/components/shared/RectangleButton";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ThreadsIcon from "@/components/icons/ThreadsIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";

const FooterGuest = () => {
  return (
    <footer className="bg-custom-black pt-24 pb-12">
      <Content>
        <div className={"grid grid-cols-12 gap-12"}>
          <div className="col-span-4">
            <img src={logo} alt="logo" className="w-40 pb-6" />
            <p className="text-lg text-custom-neutral-2">
              Nền tảng tuyệt vời dành cho các nhà tuyển dụng muốn tìm ứng viên
              tài năng. Ứng viên tìm được công việc dễ dàng hơn.
            </p>
          </div>
          <div className="flex justify-between font-medium text-custom-neutral-2 col-span-3">
            <ul>
              <li className="text-xl font-semibold mb-6 text-white">About</li>
              <li className="mt-4">Công ty</li>
              <li className="mt-4">Giá cả</li>
              <li className="mt-4">Điều khoản</li>
              <li className="mt-4">Nhà đầu tư</li>
              <li className="mt-4">Chính sách quyền riêng tư</li>
            </ul>
            <ul className="ml-4">
              <li className="text-xl font-semibold mb-6 text-white">
                Resources
              </li>
              <li className="mt-4">Trợ giúp và hỗ trợ</li>
              <li className="mt-4">Hướng dẫn</li>
              <li className="mt-4">Bản cập nhật</li>
              <li className="mt-4">Liên hệ với chúng tôi</li>
            </ul>
          </div>
          <div className="col-span-5">
            <p className="text-xl font-semibold mb-6 text-white">
              Nhận thông báo công việc
            </p>
            <p className="text-lg text-custom-neutral-2">
              Những tin tức, bài viết mới nhất sẽ được gửi đến bạn hàng tuần
            </p>
            <div className="flex mt-8">
              <RectangleInput type="email" text="Địa chỉ email" />
              <RectangleButton className={"ml-4 min-w-40"}>
                Xác nhận
              </RectangleButton>
            </div>
          </div>
        </div>
        <div className="border-t-2 pt-4 mt-20 border-gray-500 flex justify-between">
          <p className="text-xl text-custom-neutral-2 font-semibold">
            ©2024 Developed by <span className="text-white">Andou Duy</span> -
            Phenikaa University
          </p>
          <div className="fill-custom-neutral-2 flex items-center">
            <FacebookIcon className="w-8 h-8 mr-4 cursor-pointer" />
            <InstagramIcon className="w-8 h-8 mr-4 cursor-pointer" />
            <ThreadsIcon className="w-9 h-9 mr-4 cursor-pointer" />
            <LinkedinIcon className="w-8 h-8 mr-4 cursor-pointer" />
            <XIcon className="w-8 h-8" />
          </div>
        </div>
      </Content>
    </footer>
  );
};

export default FooterGuest;
