import Content from "../../shared/Content";
import graphic from "../../../assets/pattern-2.svg";
import RectangleButton from "../../shared/RectangleButton";
import SearchIcon from "../../icons/SearchIcon";
import LocationIcon from "../../icons/LocationIcon";
import SearchInput from "../../shared/SearchInput";
import undertext from "../../../assets/undertext.png";

const FindJobsCompaniesHeroGuestSection = ({ highlightText, description }) => {
  return (
    <section className="bg-custom-gray h-fit pt-48 pb-20 relative overflow-hidden">
      <img
        src={graphic}
        alt="graphic"
        className="absolute -bottom-40 left-2/3 w-[1280px]"
      />
      <img
        src={graphic}
        alt="graphic"
        className="absolute -bottom-2/3 -left-1/4 w-[1280px]"
      />
      <Content>
        <div className=" text-center">
          <p className="text-7xl font-extrabold text-gray-800 pb-20">
            Tìm{" "}
            <span className="text-custom-blue relative">
              {highlightText}{" "}
              <img
                src={undertext}
                alt="undertext"
                className="w-[520px] mt-4 absolute right-0"
              />
            </span>
            trong mơ
          </p>
          <p className="text-3xl text-gray-500">{description}</p>
        </div>
        <form className="flex lg:flex-row lg:items-center flex-col bg-white px-8 pt-8 pb-10 shadow-custom z-20 mt-16 relative w-full">
          <SearchInput
            className={"w-full"}
            text="Tiêu đề hoặc từ khóa"
            icon={<SearchIcon />}
          />
          <div className="w-0.5 h-12 bg-gray-300 ml-10 max-lg:invisible " />
          <SearchInput
            text="Địa điểm"
            icon={<LocationIcon />}
            className={"lg:mx-8 w-full"}
          />
          <RectangleButton className={"w-80"} type={"violet"}>
            Tìm kiếm
          </RectangleButton>
        </form>
        <p className="text-2xl mt-8 text-gray-600">
          Phổ biến: UI Designer, UX Researcher, Android, Admin
        </p>
      </Content>
    </section>
  );
};

export default FindJobsCompaniesHeroGuestSection;
