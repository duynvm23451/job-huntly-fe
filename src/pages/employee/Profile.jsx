import React from "react";
import { Link, useNavigate } from "react-router-dom";
import coverImage from "@/assets/image/cover.jpg";
import defaultImage from "@/assets/image/default-avatar.png";
import MailIcon from "@/components/icons/MailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import RectangleButton from "@/components/shared/RectangleButton";
import testPdf from "@/assets/pdf/testPdf.pdf";
// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import DateOfBirthIcon from "@/components/icons/DateOfBirthIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
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
      <div className="px-6 pt-4 border-t-1 border-custom-neutral-2 grid grid-cols-12 space-x-6">
        <div className="h-screen col-span-8">
          <div className="w-full bg-white border-1 border-custom-neutral-2">
            <img
              src={coverImage}
              alt="cover"
              className="h-28 w-full object-cover object-center"
            />
            <div className="flex p-4">
              <img
                src={defaultImage}
                alt="profile"
                className="w-24 h-24 rounded-full -mt-16 ml-4 border-4 border-white"
              />
              <div className="ml-6">
                <h1 className="text-xl font-bold whitespace-nowrap">
                  Nguyen Van Manh Duy
                </h1>
                <p className="flex items-center mt-2">
                  <MailIcon className="w-6 h-6 mr-2" /> duynvm1711@gmail.com
                </p>
                <p className="flex items-center mt-1 mb-4">
                  <LocationIcon className="w-6 h-6 mr-2" />
                  Manchester, UK
                </p>
              </div>
              <div className="w-full text-end">
                <RectangleButton type={"outline"}>
                  Chỉnh sửa hồ sơ
                </RectangleButton>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white border-1 border-custom-neutral-2 px-6 pt-4 pb-6">
            <h1 className="text-xl font-semibold">Giới thiệu</h1>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              voluptas nulla pariatur?
            </p>
          </div>
          <div className="mt-6 border-1 border-custom-neutral-2 h-full py-8 px-6">
            <h1 className="text-xl font-semibold mb-8">Hồ sơ ứng tuyển</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={testPdf} />
            </Worker>
          </div>
          <div className="h-8"></div>
        </div>
        <div className="h-screen col-span-4">
          <div className="w-full px-6 py-4 bg-white border-1 border-custom-neutral-2">
            <h1 className="text-xl font-semibold mb-4">Thông tin bổ sung</h1>
            <div className="flex mt-2">
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
          <div className="w-full px-6 py-4 bg-white border-1 border-custom-neutral-2 mt-6">
            <h1 className="text-xl font-semibold mb-4">Mạng xã hội</h1>
            <div className="flex mt-2">
              <FacebookIcon className="w-6 h-6 mr-2 mt-0.5" />
              <p className="flex flex-col">
                <span className="text-lg">Facebook</span>
                <span className="text-custom-violet-2 font-medium">
                  https://www.facebook.com/
                </span>
              </p>
            </div>
            <div className="flex mt-4">
              <XIcon className="w-6 h-6 mr-2 mt-0.5" />
              <p className="flex flex-col">
                <span className="text-lg">X</span>
                <span className="text-custom-violet-2 font-medium">
                  https://x.com/
                </span>
              </p>
            </div>
            <div className="flex mt-4">
              <LinkedinIcon className="w-6 h-6 mr-2 mt-0.5" />
              <p className="flex flex-col">
                <span className="text-lg">Linkedin</span>
                <span className="text-custom-violet-2 font-medium">
                  https://www.linkedin.com/
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
