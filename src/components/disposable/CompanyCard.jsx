import SmallCategoryCard from "@/components/shared/SmallCategoryCard";

const CompanyCard = ({ logo, title, jobNumber, description, categories }) => {
  return (
    <div className=" p-8 border-1 border-custom-neutral-2">
      <div className="flex justify-between ">
        <div>
          <div className="flex justify-between">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <span className="bg-violet-50 h-fit px-4 pt-1.5 pb-2 text-lg text-custom-violet rounded-sm">
              {jobNumber} vị trí
            </span>
          </div>
          <h2 className="text-2xl font-bold mt-2 text-custom-violet-2">
            {title}
          </h2>
        </div>
      </div>
      <p
        className="text-xl mt-4 text-gray-600"
        dangerouslySetInnerHTML={{
          __html:
            description.length > 80
              ? description.slice(0, 80) + "..."
              : description,
        }}
      />
      <div className="flex flex-wrap mt-4">
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
  );
};

export default CompanyCard;
