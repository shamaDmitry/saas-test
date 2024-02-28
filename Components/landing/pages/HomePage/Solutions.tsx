import { Card, Heading, Text } from "@radix-ui/themes";
import { solutionsData } from "./solutionsData";
import DynamicIcon from "@/Icons/_DynamicIcon";
import Link from "next/link";

const Solutions = () => {
  return (
    <section className="container py-10">
      <Heading className="mb-6">Our Solution for your business</Heading>

      <Text className="mb-6" as="p">
        We make it easy for users to use our platform, thats why we provide this
        benefit.
      </Text>

      <div className="grid grid-cols-4 gap-4 mb-4">
        {solutionsData.map((data) => {
          return (
            <Card key={data.id}>
              <DynamicIcon
                nameIcon={data.icon}
                className="w-10 h-10 text-red-500"
              />
              <div>{data.title}</div>

              <p>{data.body}</p>

              <Link href={data.link}>Learn more</Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
