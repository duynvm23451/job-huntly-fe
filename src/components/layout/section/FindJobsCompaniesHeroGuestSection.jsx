import Content from "@/components/shared/Content";
import graphic from "@/assets/pattern-2.svg";
import RectangleButton from "@/components/shared/RectangleButton";
import SearchIcon from "@/components/icons/SearchIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import SearchInput from "@/components/shared/SearchInput";
import undertext from "@/assets/undertext.png";

const FindJobsCompaniesHeroGuestSection = ({
  highlightText,
  description,
  formSubmitHanlder,
  isCompaniesTab = false,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    formSubmitHanlder(data);
  };
  return (
    <section className="bg-custom-gray h-fit pt-48 pb-20 relative overflow-hidden">
      <img
        src={graphic}
        alt="graphic"
        className="absolute -bottom-40 left-2/3 w-[1280px] z-10"
      />
      <img
        src={graphic}
        alt="graphic"
        className="absolute -bottom-2/3 -left-1/4 w-[1280px] z-10"
      />
      <Content className={"relative z-20"}>
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
          <p className="text-2xl text-gray-500">{description}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex lg:flex-row lg:items-center flex-col bg-white px-8 pt-8 pb-10 shadow-custom z-20 mt-16 relative w-full"
        >
          <SearchInput
            className={"w-full"}
            text="Tiêu đề hoặc từ khóa"
            icon={<SearchIcon />}
            name={isCompaniesTab ? "name" : "title"}
          />
          <div className="w-0.5 h-12 bg-gray-300 ml-10 max-lg:invisible " />
          <SearchInput
            text="Địa điểm"
            icon={<LocationIcon />}
            className={"lg:mx-8 w-full"}
            name="location"
          />
          <RectangleButton className={"w-80"} type={"violet"}>
            Tìm kiếm
          </RectangleButton>
        </form>
        <p className="text-xl mt-8 text-gray-600">
          Phổ biến: UI Designer, UX Researcher, Android, Admin
        </p>
      </Content>
    </section>
  );
};

export default FindJobsCompaniesHeroGuestSection;
