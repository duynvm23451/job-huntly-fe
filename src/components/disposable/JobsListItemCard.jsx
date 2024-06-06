import SmallCategoryCard from "../shared/SmallCategoryCard";
import RectangleButton from "../shared/RectangleButton";
const JobsListItemCard = ({
  logo,
  title,
  type,
  company,
  location,
  categories,
}) => {
  return (
    <div className="flex justify-between bg-white pl-6 pr-8 py-6 mb-6 border-2">
      <div className="flex">
        <img src={logo} alt="logo" className="w-24 mr-4" />
        <div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex items-center text-2xl text-gray-400 mt-2 ">
            <p>{company}</p>
            <p className="text-3xl">・</p>
            <p>{location}</p>
          </div>
          <div className="flex items-center mt-2 ">
            <SmallCategoryCard
              textColor={"text-green-600"}
              bgColor={"bg-green-100"}
            >
              {type}
            </SmallCategoryCard>
            <span className="w-0.5 h-11 mr-3 bg-gray-200 mt-2" />
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
      </div>

      <div className="flex flex-col">
        <RectangleButton>Ứng tuyển</RectangleButton>
        <progress
          id="file"
          value="5"
          max="10"
          className="w-full mt-4 h-3 progress-unfilled:bg-custom-neutral-2 progress-filled:bg-[#68cbad]"
        >
          32%
        </progress>
        <p className="text-xl mt-4">
          Đã có <span className="font-semibold">5 đơn</span> trên 10 vị trí
        </p>
      </div>
    </div>
  );
};

export default JobsListItemCard;
