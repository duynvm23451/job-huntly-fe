import BannerGuestSection from "@/components/layout/section/home/BannerGuestSection";
import CategoryGuestSection from "@/components/layout/section/home/CategoryGuestSection";
import FeaturedJobsGuestSection from "@/components/layout/section/home/FeaturedJobsGuestSection";
import HomepageHeroSection from "@/components/layout/section/home/HomepageHeroSection";
import LastestJobsGuestSection from "@/components/layout/section/home/LastestJobsGuestSection";

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
