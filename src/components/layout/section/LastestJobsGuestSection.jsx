import LastestJobGuestCard from "@/components/disposable/LastestJobGuestCard";
import Content from "@/components/shared/Content";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const LastestJobsGuestSection = () => {
  return (
    <section className="py-24 bg-custom-neutral">
      <Content>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold">
            Công việc <span className="text-custom-blue">mới nhất</span>
          </h1>
          <p className="flex items-center text-xl text-violet-900 font-semibold cursor-pointer hover:text-red-500">
            Xem tất cả công việc{" "}
            <ArrowRightIcon className="ml-3 mt-1 w-7 h-7" />
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-x-8 gap-y-5">
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
