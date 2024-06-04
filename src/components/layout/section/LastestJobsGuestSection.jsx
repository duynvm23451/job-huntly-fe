import LastestJobGuestCard from "../../disposable/LastestJobGuestCard";
import Content from "../../shared/Content";

const LastestJobsGuestSection = () => {
  return (
    <section className="py-24 bg-custom-neutral">
      <Content>
        <h1 className="text-5xl font-bold">
          Công việc <span className="text-custom-blue">mới nhất</span>
        </h1>
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
