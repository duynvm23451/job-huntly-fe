import HomepageHero from "../components/HomepageHero";
import Content from "../components/shared/Content";
import undertext from "../assets/undertext.png";
import RectangleButton from "../components/shared/RectangleButton";
import SearchInput from "../components/shared/SearchInput";
import SearchIcon from "../components/icons/SearchIcon";
import LocationIcon from "../components/icons/LocationIcon";

const HomeGuest = () => {
  return (
    <section className="bg-custom-gray h-screen">
      <Content className={"relative py-44"}>
        <HomepageHero />
        <div className="text-7xl font-extrabold text-gray-800">
          Khám phá{" "}
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
        <form className="flex bg-white px-8 pt-6 pb-8 shadow-custom z-20 mt-12 w-fit relative">
          <SearchInput text="Tiêu đề hoặc từ khóa" icon={<SearchIcon />} />
          <SearchInput
            text="Địa điểm"
            icon={<LocationIcon />}
            className={"mx-8"}
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

export default HomeGuest;
