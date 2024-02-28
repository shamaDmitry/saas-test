import { Heading, Text } from "@radix-ui/themes";
import { solutionsData } from "./solutionData";
import SolutionCard from "./SolutionCard";

const SolutionList = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Heading className="mb-6">Our Solution for your business</Heading>

        <Text className="mb-6" as="p">
          We make it easy for users to use our platform, thats why we provide
          this benefit.
        </Text>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {solutionsData.map((data) => {
            return <SolutionCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionList;
