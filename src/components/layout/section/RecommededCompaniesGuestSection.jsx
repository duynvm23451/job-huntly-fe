import CompanyCard from "@/components/disposable/CompanyCard";
import Content from "@/components/shared/Content";

const RecommededCompaniesGuestSection = () => {
  return (
    <section>
      <Content className={"pt-24"}>
        <h1 className="text-4xl font-bold">Công ty được đề xuất</h1>
        <p className="mt-4 text-xl text-gray-400">
          Dự vào xu hướng hiện nay, các công ty dưới đây được đề xuất
        </p>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
          <CompanyCard
            logo={
              "https://assets-global.website-files.com/6480217dd2b60074b15929c5/6481677da664682e7e41fd4f_Nomad%20Logo.svg"
            }
            title={"Nomad"}
            jobNumber={3}
            description={
              "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD)."
            }
            categories={["Marketing", "Design"]}
          />
        </div>
      </Content>
    </section>
  );
};

export default RecommededCompaniesGuestSection;
