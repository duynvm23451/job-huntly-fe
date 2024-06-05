import LastestJobGuestCard from "../../disposable/LastestJobGuestCard";
import Content from "../../shared/Content";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

const LastestJobsGuestSection = () => {
  return (
    <section className="py-24 bg-custom-neutral">
      <Content>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold">
            Công việc <span className="text-custom-blue">mới nhất</span>
          </h1>
          <p className="flex items-center text-2xl text-violet-900 font-semibold cursor-pointer hover:text-red-500">
            Xem tất cả công việc <ArrowRightIcon className="ml-4 w-10 h-10" />
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-x-11 gap-y-8">
          <LastestJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            categories={["Marketing", "Design"]}
          />
          <LastestJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            categories={["Marketing", "Design"]}
          />
          <LastestJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            categories={["Marketing", "Design"]}
          />
        </div>
      </Content>
    </section>
  );
};

export default LastestJobsGuestSection;
