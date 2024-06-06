import FindJobsCompaniesHeroGuestSection from "../components/layout/section/FindJobsCompaniesHeroGuestSection";
import FindJobsListGuest from "../components/layout/section/FindJobsListGuest";

const FindJobsGuest = () => {
  return (
    <>
      <FindJobsCompaniesHeroGuestSection
        highlightText={"công việc"}
        description={
          "Tìm sự nghiệp tiếp theo của bạn tại các công ty như HubSpot, Nike và Dropbox"
        }
      />
      <FindJobsListGuest />
    </>
  );
};

export default FindJobsGuest;
