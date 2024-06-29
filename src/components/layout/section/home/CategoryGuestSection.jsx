import Content from "@/components/shared/Content";
import boschLogo from "@/assets/image/bosch-logo.png";
import fptLogo from "@/assets/image/fpt-logo.png";
import rukutenLogo from "@/assets/image/rakuten-logo.png";
import moneyForwardLogo from "@/assets/image/money-forward-logo.png";
import CategoryCard from "@/components/shared/CategoryCard";
import TechnologyIcon from "@/components/icons/TechnologyIcon";
import DesignIcon from "@/components/icons/DesignIcon";
import SalesIcon from "@/components/icons/SalesIcon";
import MarketingIcon from "@/components/icons/MarketingIcon";
import FinanceIcon from "@/components/icons/FinanceIcon";
import EngineeringIcon from "@/components/icons/EngineeringIcon";
import BusinessIcon from "@/components/icons/BusinessIcon";
import HumanResourceIcon from "@/components/icons/HumanResourceIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const categoryList = [
  {
    icon: DesignIcon,
    text: "Design",
    availableNumber: 235,
  },
  {
    icon: SalesIcon,
    text: "Sales",
    availableNumber: 756,
  },
  {
    icon: MarketingIcon,
    text: "Marketing",
    availableNumber: 140,
  },
  {
    icon: FinanceIcon,
    text: "Finance",
    availableNumber: 140,
  },
  {
    icon: TechnologyIcon,
    text: "Technology",
    availableNumber: 436,
  },
  {
    icon: EngineeringIcon,
    text: "Engineering",
    availableNumber: 542,
  },
  {
    icon: BusinessIcon,
    text: "Business",
    availableNumber: 211,
  },
  {
    icon: HumanResourceIcon,
    text: "HumanResource",
    availableNumber: 346,
  },
];

const CategoryGuestSection = () => {
  return (
    <section className="mt-20">
      <Content>
        <p className="text-xl mb-4 font-medium text-gray-600">
          Các công ty đứng đầu
        </p>
        <div className="flex justify-between">
          <img
            src={boschLogo}
            alt="bosch-logo"
            className="w-1/5 object-contain"
          />
          <img src={fptLogo} alt="fpt-logo" className="w-1/5 object-contain" />
          <img
            src={rukutenLogo}
            alt="rakuten-logo"
            className="w-1/5 object-contain"
          />
          <img
            src={moneyForwardLogo}
            alt="money-forward-logo"
            className="w-1/5 object-contain"
          />
        </div>
        <div className="flex justify-between items-center  mt-16">
          <h1 className="text-5xl font-bold text-gray-800">
            Khám phá theo <span className="text-custom-blue">lĩnh vực</span>
          </h1>
          <p className="flex items-center text-xl text-violet-900 font-semibold cursor-pointer hover:text-red-500">
            Xem tất cả công việc{" "}
            <ArrowRightIcon className="ml-3 mt-1 w-7 h-7" />
          </p>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-3 gap-8 mt-16">
          {categoryList.map((el) => (
            <CategoryCard
              key={el.text}
              icon={el.icon}
              text={el.text}
              availableNumber={el.availableNumber}
            />
          ))}
        </div>
      </Content>
    </section>
  );
};

export default CategoryGuestSection;
