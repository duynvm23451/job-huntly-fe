import NewsCardSection from "@/components/layout/section/home/NewsCardSection";
import { logOut } from "@/services/authenitcationService";
import React from "react";

const RecuiterDashBoard = () => {
  const handleClick = () => {
    logOut();
  };
  return (
    <div>
      <div className="mx-6 my-4 flex justify-between">
        <div className="flex items-center">
          <img
            src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
            alt="company logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h1 className="text-xl font-bold">Company JSC</h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Đăng xuất
        </button>
      </div>
      <div className="px-6 py-4 border-t-1 border-custom-neutral-2">
        <h2 className="text-lg font-semibold mb-1">
          Xin chào, Nguyen Van Tuyen Dung
        </h2>
        <p className="mb-6">
          Đây là nơi bạn có thể xem được tình trạng ứng tuyển của các công việc
          mình đã đăng tải
        </p>
        <NewsCardSection />
      </div>
    </div>
  );
};

export default RecuiterDashBoard;
