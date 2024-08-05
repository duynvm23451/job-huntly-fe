import React from "react";
import { useNavigate } from "react-router-dom";
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
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={testPdf} />
            </Worker>
          </div>
          <div className="h-8"></div>
        </div>
        <div className="h-screen bg-green-400 col-span-4">
          <div className="w-full bg-white border-1 border-custom-neutral-2 h-48">
            <DateOfBirthIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
