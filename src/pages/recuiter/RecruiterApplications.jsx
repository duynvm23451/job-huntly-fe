import ApplicationOption from "@/components/disposable/ApplicationOption";
import SeeApplicationButton from "@/components/disposable/SeeApplicationButton";
import SearchIcon from "@/components/icons/SearchIcon";
import Pagination from "@/components/shared/Pagination";
import SearchInput from "@/components/shared/SearchInput";
import useGetData from "@/hooks/useGetData";
import { logOut } from "@/services/authenitcationService";
import { convertToReadableApplicationStatus } from "@/utils/hepler";
import { getApplicants, getConfiguration } from "@/utils/http";
import { mappingColor } from "@/utils/mappingColor";
import renderPaginationItems from "@/utils/pagination";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  useNavigate,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom";

const RecruiterApplications = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  let applicationStatus = {};
  const { data } = useGetData(getConfiguration);
  if (data) {
    applicationStatus = mappingColor(data.applicationStatus);
  }
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const token = useRouteLoaderData("root");
  const [params, setParams] = useSearchParams();
  const page = params.get("page") - 1 || 1;
  const size = params.get("size") || 5;
  const [applicationData, setApplicationData] = useState(null);
  useEffect(() => {
    const queryParams = {
      page,
      size,
      token,
    };
    const fetchApplicants = async () => {
      try {
        const response = await getApplicants(queryParams);
        setApplicationData(response.data);
      } catch (error) {}
    };
    fetchApplicants();
  }, [page, size]);
  console.log(applicationData);
  return (
    <div>
      <div className="mx-6 my-4 flex justify-between">
        <div className="flex items-center">
          {loggedInUser?.company && (
            <img
              src={loggedInUser.company.logo}
              alt="company logo"
              className="w-12 h-12 rounded-full mr-4"
            />
          )}

          <h1 className="text-xl font-bold">
            {loggedInUser?.company
              ? loggedInUser.company.name
              : "Không có công ty"}
          </h1>
        </div>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <div className="px-6 py-4 border-t-1 border-custom-neutral-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            Tổng số ứng viên:{" "}
            {applicationData && applicationData.page.totalElements}
          </h1>

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
          <tbody>
            <tr className="h-8"></tr>
          </tbody>
          <tbody className="border-1 border-custom-neutral-2">
            {applicationData &&
              applicationData.content.map((el) => (
                <tr key={el.id} className={`text-gray-700`}>
                  <td className="px-3 py-4 tracking-wider">
                    {el.user.fullName}
                  </td>
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
                    Sale/ Nhân Viên Kinh Doanh/ Tư Vấn Xuất Khẩu Lao Động (Thu
                    Nhập Từ 20++ Triệu/ Tháng)
                  </td>
                  <td className="px-3 py-4 tracking-wider">
                    <div className="flex items-center justify-end relative">
                      <Link to={"/applications/" + el.id}>
                        <SeeApplicationButton />
                      </Link>
                      <div className="w-4"></div>
                      <ApplicationOption />
                    </div>
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
                applicationData.page.number + 1,
                applicationData.page.totalPages
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterApplications;
