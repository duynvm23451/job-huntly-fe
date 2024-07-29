import ApplicationOption from "@/components/disposable/ApplicationOption";
import WarningIcon from "@/components/icons/WarningIcon";
import Pagination from "@/components/shared/Pagination";
import useGetData from "@/hooks/useGetData";
import {
  convertToReadableApplicationStatus,
  formatTimestampToDate,
} from "@/utils/hepler";
import { getApplications, getConfiguration } from "@/utils/http";
import { mappingColor } from "@/utils/mappingColor";
import renderPaginationItems from "@/utils/pagination";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useNavigate,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom";

const EmployeeApplications = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [tab, setTab] = useState("");
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  const size = params.get("size") || 5;
  const { data } = useGetData(getConfiguration);
  let applicationStatus = {};
  if (data) {
    applicationStatus = mappingColor(data.applicationStatus);
  }
  const [applicationData, setApplicationData] = useState(null);
  useEffect(() => {
    const queryParams = {
      page,
      size,
      status: tab,
    };
    const fetchApplications = async () => {
      try {
        const response = await getApplications(queryParams, token);
        setApplicationData(response.data);
      } catch (error) {}
    };
    fetchApplications();
  }, [page, size, tab]);
  return (
    <div>
      <div className="m-6 flex justify-between">
        <h1 className="text-2xl font-bold">Đơn ứng tuyển</h1>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <div className="px-6 pt-4 border-t-1 border-custom-neutral-2">
        <h2 className="text-lg font-semibold mb-1">
          Xin chào, {loggedInUser.fullName}
        </h2>
        <p className="mb-6">
          Đây là nơi bạn có thể xem toàn bộ đơn ứng tuyển của mình
        </p>
        <ul className="flex">
          {/* IN_REVIEW, INTERVIEWING, HIRED, CANCELLED */}
          <li
            onClick={() => setTab("")}
            className={`cursor-pointer font-medium border-b-2 pb-1.5 px-1  ${
              tab == ""
                ? "text-gray-900 border-custom-violet"
                : "text-gray-500 border-transparent"
            } `}
          >
            Tất cả
          </li>
          <li
            onClick={() => setTab("IN_REVIEW")}
            className={`ml-6 cursor-pointer font-medium border-b-2 pb-1.5 px-1  ${
              tab == "IN_REVIEW"
                ? "text-gray-900 border-custom-violet"
                : "text-gray-500 border-transparent"
            } `}
          >
            Đang xem xét
          </li>
          <li
            onClick={() => setTab("INTERVIEWING")}
            className={`ml-6 cursor-pointer font-medium border-b-2 pb-1.5 px-1  ${
              tab == "INTERVIEWING"
                ? "text-gray-900 border-custom-violet"
                : "text-gray-500 border-transparent"
            } `}
          >
            Đang phỏng vấn
          </li>
          <li
            onClick={() => setTab("HIRED")}
            className={`ml-6 cursor-pointer font-medium border-b-2 pb-1.5 px-1  ${
              tab == "HIRED"
                ? "text-gray-900 border-custom-violet"
                : "text-gray-500 border-transparent"
            } `}
          >
            Được tuyển
          </li>
          <li
            onClick={() => setTab("CANCELLED")}
            className={`ml-6 cursor-pointer font-medium border-b-2 pb-1.5.5 px-1  ${
              tab == "CANCELLED"
                ? "text-gray-900 border-custom-violet"
                : "text-gray-500 border-transparent"
            } `}
          >
            Bị loại
          </li>
        </ul>
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-6 px-6">
        <h1 className="text-xl font-semibold mb-8 mt-2">Lịch sử ứng tuyển</h1>
        <table className="w-full border-b-1 border-custom-neutral-2">
          <thead className="border-b-1 border-custom-neutral-2">
            <tr>
              <th className="p-3 font-semibold tracking-wide text-left">#</th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Công ty
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Công việc
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Ngày ứng tuyển
              </th>
              <th className="p-3 font-semibold tracking-wide text-left">
                Trạng thái
              </th>
              <th className="p-3 font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody>
            {applicationData &&
              applicationData.content.map((el, index) => (
                <tr
                  key={el.id}
                  className={`${
                    index % 2 == 1 ? "bg-violet-50" : ""
                  } text-gray-700`}
                >
                  <td className="px-3 py-4 tracking-wider font-semibold text-blue-500">
                    {el.id}
                  </td>
                  <td className="px-3 py-4 tracking-wider flex items-center">
                    <img
                      src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
                      alt="logo company"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <span>{el.job.company.name}</span>
                  </td>
                  <td className="px-3 py-4 tracking-wider">{el.job.title}</td>
                  <td className="px-3 py-4 tracking-wider">
                    {formatTimestampToDate(el.createdAt)}
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    <span
                      className={`py-1.5 px-3 border-1 rounded-full`}
                      style={{
                        borderColor: applicationStatus[el.status],
                        color: applicationStatus[el.status],
                      }}
                    >
                      {convertToReadableApplicationStatus(el.status)}
                    </span>
                  </td>
                  <td className="relative">
                    <ApplicationOption />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {applicationData && (
          <div className="w-full flex justify-center mt-12">
            <Pagination
              navigatePath="/applications"
              pagination={renderPaginationItems(
                applicationData.number + 1,
                applicationData.totalPages
              )}
            />
          </div>
        )}
        {(!applicationData || applicationData.totalElements == 0) && (
          <p className="flex flex-col justify-center items-center p-8 text-xl font-medium text-red-500">
            <WarningIcon className="w-20 h-20 mb-4 text-center" />
            Không tìm thấy đơn ứng tuyển nào
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeApplications;
