import CopyIcon from "@/components/icons/CopyIcon";
import FacebookColorIcon from "@/components/icons/FacebookColorIcon";
import LinkedinColorIcon from "@/components/icons/LinkedinColorIcon";
import YoutubeColorIcon from "@/components/icons/YoutubeColorIcon";
import Content from "@/components/shared/Content";
import React from "react";
import ImageSlider from "./ImageSlider";

const CompanyDetailContentSection = ({ company }) => {
  const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
    "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
    "https://burst.shopifycdn.com/photos/clear-water-with-parked-boats-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  ];
  const currentUrl = window.location.href;
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      // notice copy successfully
    } catch (error) {
      console.error("Failed to copy URL");
    }
  };
  return (
    <section className="bg-white py-16">
      <Content>
        <div className="grid grid-cols-12 h-fit">
          <div className="xl:col-span-8 col-span-7 h-full">
            <h1 className="text-3xl font-semibold mb-3">Mô tả</h1>
            <p>{company.description}</p>
          </div>
          <div className="xl:col-span-4 col-span-5 ml-16 h-full break-words">
            <h1 className="text-2xl font-semibold">
              Chia sẻ công ty với bạn bè
            </h1>
            <div className="m-4 mt-4">
              <h2 className="font-medium">Sao chép đường dẫn </h2>
              <p className="border-1 border-custom-neutral-2 rounded-md flex items-center justify-between py-2 px-4 mt-2 text-gray-500">
                {currentUrl.slice(0, 25)}...
                <button
                  className="bg-neutral-100 hover:bg-neutral-200 rounded p-1"
                  onClick={handleCopyClick}
                >
                  <CopyIcon className="text-[#6f7882] w-8 h-8" />
                </button>
              </p>
              <h2 className="font-medium mt-6">Chia sẻ qua mạng xã hội</h2>
              <div className="flex mt-3">
                <a
                  href={company.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-custom-neutral-2 p-3 rounded-full mr-4"
                >
                  <FacebookColorIcon className="w-8 h-8" />
                </a>
                <a
                  href={company.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-custom-neutral-2 p-3 rounded-full mr-4"
                >
                  <YoutubeColorIcon className="w-8 h-8" />
                </a>
                <a
                  href={company.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-custom-neutral-2 p-3 rounded-full"
                >
                  <LinkedinColorIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl font-semibold mb-10">Hình ảnh của công ty</h1>
          <ImageSlider images={images} />
        </div>
      </Content>
    </section>
  );
};

export default CompanyDetailContentSection;
