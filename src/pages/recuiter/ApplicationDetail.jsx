import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import DateOfBirthIcon from "@/components/icons/DateOfBirthIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WarningIcon from "@/components/icons/WarningIcon";
import XIcon from "@/components/icons/XIcon";
import ApplicantProfileSection from "@/components/layout/section/application-detail/ApplicantProfileSection";
import ApplicationResumeSection from "@/components/layout/section/application-detail/ApplicationResumeSection";
import useGetData from "@/hooks/useGetData";
import { logOut } from "@/services/authenitcationService";
import {
  convertToReadableApplicationStatus,
  formatTimeDifference,
} from "@/utils/hepler";
import { getApplicationById } from "@/utils/http";
import React, { useMemo, useState } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

const ApplicationDetail = () => {
  const token = useRouteLoaderData("root");
  const params = useParams();
  const id = params.applicationId;

  const [tab, setTab] = useState("profile"); //profile, resume, progress
  const navigate = useNavigate();
  const queryParams = useMemo(
    () => ({
      id,
      token,
      sort: "createdAt,desc",
    }),
    [id]
  );
  const handleClick = () => {
    navigate("/");
  };

  const { error, data } = useGetData(getApplicationById, queryParams);
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
          Trở về dashboard
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
        {data && (
          <div className="w-full mt-6 h-fit grid grid-cols-12 gap-x-6">
            <div className="col-span-3 h-full border-1 border-custom-neutral-2 p-4">
              <div className="flex">
                <img
                  src={data.user.avatarFileName}
                  alt="user's avatar"
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-lg font-semibold">
                    {data.user.fullName}
                  </h1>
                </div>
              </div>
              <div className="px-4 py-3 mt-6 bg-gray-50 shadow-md">
                <div className="w-full border-b-2 border-custom-neutral-2 pb-2 mb-3">
                  <p className="font-semibold">Công việc ứng tuyển</p>
                  <p className="text-sm">
                    {formatTimeDifference(data.createdAt)}
                  </p>
                </div>
                <p>{data.job.title}</p>
              </div>
              <div className="px-4 py-3 mt-6 bg-gray-50 shadow-md">
                <div className="w-full border-b-2 border-custom-neutral-2 pb-2 mb-3">
                  <p className="font-semibold">Trạng thái ứng tuyển</p>
                </div>
                <span className="text-custom-violet font-semibold">
                  {convertToReadableApplicationStatus(data.status)}
                </span>
              </div>
              <div className="px-4 py-3 mt-6">
                <h2 className="text-xl font-bold">Thông tin liên hệ</h2>
                <div className="flex mt-4">
                  <DateOfBirthIcon className="w-6 h-6 mr-2 mt-0.5" />
                  <p className="flex flex-col">
                    <span className="text-lg">Ngày sinh</span>
                    <span className="text-gray-600">17/11/2001</span>
                  </p>
                </div>
                <div className="flex mt-4">
                  <PhoneIcon className="w-6 h-6 mr-2 mt-0.5" />
                  <p className="flex flex-col">
                    <span className="text-lg">Số điện thoại</span>
                    <span className="text-gray-600">+ 0987654321</span>
                  </p>
                </div>
                <div className="flex mt-4">
                  <PersonIcon className="w-6 h-6 mr-2 mt-0.5" />
                  <p className="flex flex-col">
                    <span className="text-lg">Giới tính</span>
                    <span className="text-gray-600">+ 0987654321</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-9  px-4 py-3 h-full border-1 border-custom-neutral-2">
              <div className="grid grid-cols-12">
                <div
                  className=" col-span-4 h-fit cursor-pointer"
                  onClick={() => setTab("profile")}
                >
                  <div
                    className={`text-lg font-semibold pb-4 border-b-3 ${
                      tab == "profile"
                        ? "text-custom-black border-custom-violet"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="px-4">Thông tin ứng viên</span>
                  </div>
                </div>
                <div
                  className=" col-span-4 h-fit cursor-pointer"
                  onClick={() => setTab("resume")}
                >
                  <div
                    className={`text-lg font-semibold pb-4 border-b-3 ${
                      tab == "resume"
                        ? "text-custom-black border-custom-violet"
                        : "text-gray-500"
                    }`}
                  >
                    <span className="px-4">Hồ sơ ứng viên</span>
                  </div>
                </div>
                <div
                  className=" col-span-4 h-fit cursor-pointer"
                  onClick={() => setTab("progress")}
                >
                  <div
                    className={`text-lg font-semibold pb-4 border-b-3 ${
                      tab == "progress"
                        ? "text-custom-black border-custom-violet"
                        : "text-gray-500"
                    }`}
                  >
                    <span className="px-4">Tiến trình tuyển dụng</span>
                  </div>
                </div>
              </div>
              {tab == "profile" && (
                <ApplicantProfileSection application={data} />
              )}
              {tab == "resume" && (
                <ApplicationResumeSection application={data} />
              )}
              {tab == "progress" && (
                <ApplicationResumeSection application={data} />
              )}
            </div>
          </div>
        )}
        {!data && error && (
          <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-xl font-medium text-red-500">
            <WarningIcon className="w-20 h-20 mb-4 text-center" />
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetail;
