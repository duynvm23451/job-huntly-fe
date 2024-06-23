import HomepageHero from "@/components/HomepageHero";
import Content from "@/components/shared/Content";
import undertext from "@/assets/undertext.png";
import RectangleButton from "@/components/shared/RectangleButton";
import SearchInput from "@/components/shared/SearchInput";
import SearchIcon from "@/components/icons/SearchIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const HomepageHeroSection = () => {
  return (
    <section className="bg-custom-gray h-fit">
      <Content className={"relative pt-20 pb-36"}>
        <HomepageHero />
        <div className="relative z-20">
          <div className="text-7xl font-extrabold text-gray-800 mt-20">
            Khám phá
            <p className="mt-4">
              hơn <span className="text-custom-blue">5000+</span>
              <img src={undertext} alt="undertext" className="w-[420px] mt-4" />
            </p>
            công việc
          </div>
          <p className="mt-16 text-2xl w-[560px] text-gray-600">
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
          <p className="text-xl mt-8 text-gray-600">
            Phổ biến: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </Content>
    </section>
  );
};

export default HomepageHeroSection;
