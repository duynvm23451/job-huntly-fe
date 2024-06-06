import HomepageHero from "../../HomepageHero";
import Content from "../../shared/Content";
import undertext from "../../../assets/undertext.png";
import RectangleButton from "../../shared/RectangleButton";
import SearchInput from "../../shared/SearchInput";
import SearchIcon from "../../icons/SearchIcon";
import LocationIcon from "../../icons/LocationIcon";

const HomepageHeroSection = () => {
  return (
    <section className="bg-custom-gray h-fit">
      <Content className={"relative pt-52 pb-36"}>
        <HomepageHero />
        <div className="text-7xl font-extrabold text-gray-800">
          Khám phá
          <p className="mt-6 mb-3">
            hơn <span className="text-custom-blue">5000+</span>
            <img src={undertext} alt="undertext" className="w-[520px] mt-4" />
          </p>
          công việc
        </div>
        <p className="mt-16 text-3xl w-[720px] text-gray-600">
          Nền tảng tuyệt vời dành cho người tìm việc đang tìm kiếm những nghề
          nghiệp mới và đam mê mới.
        </p>
        <form className="flex lg:flex-row flex-col bg-white px-8 pt-6 pb-8 shadow-custom z-20 mt-12 lg:w-fit w-full relative">
          <SearchInput
            className="w-96"
            text="Tiêu đề hoặc từ khóa"
            icon={<SearchIcon />}
          />
          <SearchInput
            text="Địa điểm"
            icon={<LocationIcon />}
            className={"lg:mx-8 w-96"}
          />
          <RectangleButton type={"violet"}>Tìm kiếm</RectangleButton>
        </form>
        <p className="text-2xl mt-8 text-gray-600">
          Phổ biến: UI Designer, UX Researcher, Android, Admin
        </p>
      </Content>
    </section>
  );
};

export default HomepageHeroSection;
