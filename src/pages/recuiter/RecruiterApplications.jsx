import ApplicationOption from "@/components/disposable/ApplicationOption";
import SeeApplicationButton from "@/components/disposable/SeeApplicationButton";
import SearchIcon from "@/components/icons/SearchIcon";
import SearchInput from "@/components/shared/SearchInput";
import useGetData from "@/hooks/useGetData";
import { logOut } from "@/services/authenitcationService";
import { convertToReadableApplicationStatus } from "@/utils/hepler";
import { getConfiguration } from "@/utils/http";
import { mappingColor } from "@/utils/mappingColor";
import React from "react";

const RecruiterApplications = () => {
  const handleClick = () => {
    logOut();
  };
  let applicationStatus = {};
  const { data } = useGetData(getConfiguration);
  if (data) {
    applicationStatus = mappingColor(data.applicationStatus);
  }
  return (
    <div className="col-span-12">
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
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Tổng số ứng viên: 19</h1>

          <div className="border-1 border-custom-neutral-2 px-4 py-0.5 w-80 flex">
            <SearchIcon />
            <input
              className="border-none focus:ring-0 mr-4 w-full"
              placeholder="Tìm kiếm ứng viên"
            />
          </div>
        </div>

        <table className="w-full border-b-1 border-custom-neutral-2 mt-4">
          <thead className="border-1 pb-1 border-custom-neutral-2">
            <tr>
              <th className="p-3 font-semibold tracking-wide text-left">
                Họ và tên
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Trạng thái
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Ngày ứng tuyển
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Công việc
              </th>
              <th className="p-3 font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <br />
          <tbody className="border-1 border-custom-neutral-2">
            <tr className={`text-gray-700`}>
              <td className="px-3 py-4 tracking-wider">Nguyễn Văn Mạnh Duy</td>
              <td className="px-3 py-4 tracking-wider">
                {" "}
                <span
                  className={`py-1.5 text-sm px-3 border-1 rounded-full`}
                  style={{
                    borderColor: applicationStatus["IN_REVIEW"],
                    color: applicationStatus["IN_REVIEW"],
                  }}
                >
                  {convertToReadableApplicationStatus("IN_REVIEW")}
                </span>
              </td>
              <td className="px-3 py-4 tracking-wider">27-11-2020</td>
              <td className="px-3 py-4 tracking-wider max-w-48">
                Sale/ Nhân Viên Kinh Doanh/ Tư Vấn Xuất Khẩu Lao Động (Thu Nhập
                Từ 20++ Triệu/ Tháng)
              </td>
              <td className="px-3 py-4 tracking-wider">
                <div className="flex items-center justify-end relative">
                  <SeeApplicationButton />
                  <div className="w-4"></div>
                  <ApplicationOption />
                </div>
              </td>
            </tr>
            <tr className={`text-gray-700 bg-violet-50`}>
              <td className="px-3 py-4 tracking-wider">Nguyễn Văn Mạnh Duy</td>
              <td className="px-3 py-4 tracking-wider">
                {" "}
                <span
                  className={`py-1.5 text-sm px-3 border-1 rounded-full`}
                  style={{
                    borderColor: applicationStatus["INTERVIEWING"],
                    color: applicationStatus["INTERVIEWING"],
                  }}
                >
                  {convertToReadableApplicationStatus("INTERVIEWING")}
                </span>
              </td>
              <td className="px-3 py-4 tracking-wider">27-11-2020</td>
              <td className="px-3 py-4 tracking-wider max-w-48">
                Sale/ Nhân Viên Kinh Doanh/ Tư Vấn Xuất Khẩu Lao Động (Thu Nhập
                Từ 20++ Triệu/ Tháng)
              </td>
              <td className="px-3 py-4 tracking-wider">
                <div className="flex items-center justify-end relative">
                  <SeeApplicationButton />
                  <div className="w-4"></div>
                  <ApplicationOption />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterApplications;
