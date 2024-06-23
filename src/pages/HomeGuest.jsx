import BannerGuestSection from "@/components/layout/section/BannerGuestSection";
import CategoryGuestSection from "@/components/layout/section/CategoryGuestSection";
import FeaturedJobsGuestSection from "@/components/layout/section/FeaturedJobsGuestSection";
import HomepageHeroSection from "@/components/layout/section/HomepageHeroSection";
import LastestJobsGuestSection from "@/components/layout/section/LastestJobsGuestSection";

const HomeGuest = () => {
  return (
    <>
      <HomepageHeroSection />
      <CategoryGuestSection />
      <BannerGuestSection />
      <FeaturedJobsGuestSection />
      <LastestJobsGuestSection />
    </>
  );
};

export default HomeGuest;
