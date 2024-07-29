import RectangleButton from "@/components/shared/RectangleButton";
import webDemo from "@/assets/image/web-demo.png";
import Content from "@/components/shared/Content";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const BannerGuestSection = () => {
  const navigate = useNavigate();
  const redirectRegister = () => {
    navigate("/auth/signup");
  };
  return (
    <section className="my-12 mt-36">
      <Content>
        <div className="relative flex bg-custom-violet px-28 pt-24">
          <div className="xl:mr-0 mr-20 basis-3/4">
            <h1 className="2xl:text-5xl text-4xl font-bold text-white w-5/6">
              Bắt đầu đăng tin tuyển dụng ngay hôm nay
            </h1>
            <p className="mt-14 mb-8 text-2xl text-white">
              Tiết kiện chỉ với 50.000 mỗi tháng
            </p>
            <RectangleButton
              type="white"
              className={"mb-12"}
              onClick={redirectRegister}
            >
              Đăng kí miễn phí
            </RectangleButton>
          </div>

          <div className="overflow-hidden h-[400px]">
            <img
              src={webDemo}
              alt="web-demo"
              className="align-middle z-10 relative"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[180px] h-[100px] border-b-[100px] border-l-[180px] z-20 border-b-white border-l-transparent" />
          <div className="absolute top-0 left-0 w-[180px] h-[100px] border-b-[100px] border-l-[180px] z-20 border-b-transparent border-l-white" />
        </div>
      </Content>
    </section>
  );
};

export default BannerGuestSection;
