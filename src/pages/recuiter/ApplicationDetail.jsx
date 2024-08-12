import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { logOut } from "@/services/authenitcationService";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ApplicationDetail = () => {
  const params = useParams();
  const id = params.applicationId;
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
      <div className="border-t-1 border-custom-neutral-2 px-6 py-4">
        <Link
          to={"/applications"}
          className="flex text-xl items-center font-semibold"
        >
          <ArrowLeftIcon />
          <span className="ml-2">Quay về danh sách đơn ứng tuyển</span>
        </Link>
        <div className="w-full mt-6 h-screen grid grid-cols-12 gap-x-6">
          <div className="col-span-3 h-full border-1 border-custom-neutral-2 p-4">
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="user's avatar"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold">Nguyễn Văn Mạnh Duy</h1>
              </div>
            </div>
          </div>
          <div className="col-span-9 h-full border-1 border-custom-neutral-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
