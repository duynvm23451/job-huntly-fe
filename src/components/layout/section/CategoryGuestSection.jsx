import Content from "../../shared/Content";
import boschLogo from "../../../assets/image/bosch-logo.png";
import fptLogo from "../../../assets/image/fpt-logo.png";
import rukutenLogo from "../../../assets/image/rakuten-logo.png";
import moneyForwardLogo from "../../../assets/image/money-forward-logo.png";
import CategoryCard from "../../shared/CategoryCard";
import TechnologyIcon from "../../icons/TechnologyIcon";
import DesignIcon from "../../icons/DesignIcon";
import SalesIcon from "../../icons/SalesIcon";
import MarketingIcon from "../../icons/MarketingIcon";
import FinanceIcon from "../../icons/FinanceIcon";
import EngineeringIcon from "../../icons/EngineeringIcon";
import BusinessIcon from "../../icons/BusinessIcon";
import HumanResourceIcon from "../../icons/HumanResourceIcon";

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
        <p className="text-3xl mb-4 font-medium">Các công ty đứng đầu</p>
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
        <p className="text-5xl font-bold text-gray-800 mt-8">
          Khám phá theo <span className="text-custom-blue">lĩnh vực</span>
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-12 mt-16">
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
