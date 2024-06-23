import BannerGuestSection from "@/components/layout/section/BannerGuestSection";
import FindJobsCompaniesHeroGuestSection from "@/components/layout/section/FindJobsCompaniesHeroGuestSection";
import RecommededCompaniesGuestSection from "@/components/layout/section/RecommededCompaniesGuestSection";

const CompaniesGuest = () => {
  return (
    <div className="pb-12">
      <FindJobsCompaniesHeroGuestSection
        highlightText={"công ty"}
        description={"Tìm công ty trong mơ mà bạn muốn được làm việc"}
      />
      <RecommededCompaniesGuestSection />
      <BannerGuestSection />
    </div>
  );
};

export default CompaniesGuest;
