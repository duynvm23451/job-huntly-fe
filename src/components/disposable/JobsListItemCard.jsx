import SmallCategoryCard from "@/components/shared/SmallCategoryCard";
import RectangleButton from "@/components/shared/RectangleButton";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
const JobsListItemCard = ({
  logo,
  id,
  title,
  type,
  company,
  location,
  categories,
}) => {
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();
  const applyHandle = () => {
    if (!token) {
      navigate("/auth/login");
    }
  };
  return (
    <div className="grid grid-cols-12 px-6 py-6 mb-6 w-11/12 border-1 border-custom-neutral-2">
      <Link to={"/jobs/" + id} className="grid grid-cols-7 col-span-9">
        <img src={logo} alt="logo" className="w-18 col-span-1" />
        <div className="col-span-6">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="flex items-center text-lg text-gray-400">
            <p>{company}</p>
            <p className="text-xl">・</p>
            <p>{location}</p>
          </div>
          <div className="flex items-center mt-2">
            <SmallCategoryCard
              textColor={"text-green-600"}
              bgColor={"bg-green-100"}
            >
              {type}
            </SmallCategoryCard>
            <span className="w-0.5 h-8 mr-3 bg-gray-200 mt-2" />
            {categories.map((el) => (
              <SmallCategoryCard
                textColor={"text-white"}
                bgColor={"bg-custom-violet"}
                key={el}
              >
                {el}
              </SmallCategoryCard>
            ))}
          </div>
        </div>
      </Link>

      <div className="flex flex-col col-span-3 w-fit">
        <RectangleButton onClick={applyHandle}>Ứng tuyển</RectangleButton>
        <progress
          value="5"
          max="10"
          className="w-full mt-2.5 h-2 progress-unfilled:bg-custom-neutral-2 progress-filled:bg-[#68cbad]"
        >
          32%
        </progress>
        <p className="mt-3">
          Đã có <span className="font-semibold">5 đơn</span> trên 10 vị trí
        </p>
      </div>
    </div>
  );
};

export default JobsListItemCard;
