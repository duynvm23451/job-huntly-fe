import MultiCheckboxDropdown from "@/components/disposable/MultiCheckBoxDropDown";
import ProfilePictureUpload from "@/components/disposable/ProfilePictureUpload";
import RectangleButton from "@/components/shared/RectangleButton";
import useGetData from "@/hooks/useGetData";
import {
  createUpdateCompany,
  getComapnyDetail,
  getConfiguration,
} from "@/utils/http";
import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditOverviewRecruiterSection = () => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const companyId = useMemo(() => {
    return loggedInUser?.company?.id || null;
  }, [loggedInUser?.company?.id]);

  const options = useMemo(() => ({ id: companyId }), [companyId]);

  const { data: company } = useGetData(getComapnyDetail, options);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (company) {
      setValue(company.description);
    }
  }, [company]);
  const [logo, setLogo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data } = useGetData(getConfiguration);

  const handleFile = (logo) => {
    setLogo(logo);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    formData.industries = selectedOptions;
    fd.append("file", logo);
    fd.append("description", value);
    Object.keys(formData).forEach((element) => {
      fd.append(element, formData[element]);
    });
    fd.append("token", token);
    fd.append("id", companyId);
    setIsLoading(true);
    try {
      const data = await createUpdateCompany(fd);

      toast.success(data.message, {
        position: "bottom-right",
      });
    } catch (error) {
      const errorData = error.response.data;
      toast.error(errorData.message, {
        position: "bottom-right",
      });
    }
    setIsLoading(false);
  };
  return (
    <form className="col-span-12" onSubmit={handleSubmit}>
      <ToastContainer />
      <p className="mt-4 text-lg font-semibold">Thông tin cơ bản</p>
      <p className="mb-6">
        Đây là nơi bạn có thể tạo mới/chỉnh sửa thông tin cơ bản của công ty
      </p>
      <div className="border-t-1 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Logo của công ty</h3>
          <p>Ảnh tải lên sẽ làm logo của công ty, được hiển thị công khai</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <ProfilePictureUpload
            currentLogo={company?.logo}
            onHandleFile={handleFile}
          />
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-4 pb-6 grid grid-cols-12">
        <div className="col-span-4">Thông tin công ty</div>
        <div className="col-span-8">
          <label className="font-semibold">
            Tên công ty<span className="text-red-500"> *</span>
          </label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            defaultValue={company ? company.name : ""}
            name="name"
          />
          <label className="font-semibold">
            Địa chỉ<span className="text-red-500"> *</span>
          </label>
          <input
            required
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            defaultValue={company ? company.location : ""}
            name="location"
          />
          <div className="flex w-2/3 mt-4">
            <div className="w-full mr-4">
              <label className="font-semibold">
                Số nhân viên<span className="text-red-500"> *</span>
              </label>
              <input
                required
                type="number"
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
                defaultValue={company ? company.employees : ""}
                name="employees"
              />
            </div>
            <div className="w-full">
              <label className="font-semibold">
                Lĩnh vực<span className="text-red-500"> *</span>
              </label>
              <MultiCheckboxDropdown
                options={data ? data.industries : []}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
            </div>
          </div>
          <div className="flex w-2/3 mt-4">
            <div className="w-full">
              <label className="font-semibold">
                Ngày thành lập<span className="text-red-500"> *</span>
              </label>
              <input
                type="date"
                className="px-4 py-2 border-1 mt-2 w-full border-custom-neutral-2 rounded-sm block"
                defaultValue={company ? company.dateFounded : ""}
                name="dateFounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-custom-neutral-2 pt-4 py-20 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Mô tả về công ty</h3>
          <p>Tóm tắt sơ lược về công ty của bạn</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <label className="font-semibold mb-2 inline-block">
            Mô tả<span className="text-red-500"> *</span>
          </label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-36"
          />
        </div>
      </div>
      <div className="border-t-1 border-b-1 mb-8 border-custom-neutral-2 py-4 grid grid-cols-12">
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">Mạng xã hội</h3>
          <p>
            Thêm các đường link các trang mạng xã hội của công ty bạn để ứng
            viên có thể dễ dàng tìm hiểu hơn
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-8">
          <label className="font-semibold">Facebook</label>
          <input
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="facebookLink"
            defaultValue={company ? company.facebookLink : ""}
          />
          <br />
          <label className="font-semibold">Youtube</label>
          <input
            className="px-4 py-2 border-1 mt-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="youtubeLink"
            defaultValue={company ? company.youtubeLink : ""}
          />
          <br />
          <label className="font-semibold">Linkedin</label>
          <input
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="linkedinLink"
            defaultValue={company ? company.linkedinLink : ""}
          />
          <br />
          <label className="font-semibold">Website</label>
          <input
            className="px-4 py-2 border-1 mt-2 mb-2 w-2/3 border-custom-neutral-2 rounded-sm block"
            name="websiteLink"
            defaultValue={company ? company.websiteLink : ""}
          />
        </div>
      </div>

      <div className="flex justify-end pb-8 w-11/12">
        <RectangleButton>
          {!isLoading && loggedInUser && loggedInUser.company
            ? "Lưu thay đổi"
            : "Tạo mới"}
          {isLoading && "Loading"}
        </RectangleButton>
      </div>
    </form>
  );
};

export default EditOverviewRecruiterSection;
