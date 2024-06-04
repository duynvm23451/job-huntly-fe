import FeaturedJobGuestCard from "../../disposable/FeaturedJobGuestCard";
import Content from "../../shared/Content";

const FeaturedJobsGuestSection = () => {
  return (
    <section className="mt-48 pb-24">
      <Content>
        <h1 className="text-5xl font-bold">
          Công việc <span className="text-custom-blue">nổi bật</span>
        </h1>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-12 mt-16">
          <FeaturedJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            description={
              "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels."
            }
            categories={["Marketing", "Design"]}
          />
          <FeaturedJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            description={
              "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels."
            }
            categories={["Marketing", "Design"]}
          />
          <FeaturedJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            description={
              "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels."
            }
            categories={["Marketing", "Design"]}
          />
          <FeaturedJobGuestCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/64816750618c99bec18c8cb8_Revolut%20Logo.svg"
            }
            title={"Email marketing"}
            type={"Full Time"}
            company={"Revolut"}
            location={"Madrid, Span"}
            description={
              "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels."
            }
            categories={["Marketing", "Design"]}
          />
        </div>
      </Content>
    </section>
  );
};
export default FeaturedJobsGuestSection;
