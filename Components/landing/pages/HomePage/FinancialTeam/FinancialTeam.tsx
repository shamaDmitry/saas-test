import { Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import FinancialAvatarsList from "./FinancialAvatarsList";

const FinancialTeam = () => {
  return (
    <section className="relative py-10 bg-light overflow-hidden">
      <div className="-top-full absolute -right-1/3 w-[1340px] h-[1102px] rotate-[50deg] bg-primary rounded-bl-[50%] rounded-br-[50%]"></div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16">
          <div>
            <Heading className="mb-6">
              Easy collaborative financial team
            </Heading>

            <Text className="mb-6" as="p">
              No need to worry about your files being lost because we are very
              loyal to be your storage platform.
            </Text>

            <div className="flex items-center gap-3 mb-4">
              <FinancialAvatarsList />

              <p className="font-medium">More than 10.000 people have tried</p>
            </div>

            <Button className="">Try for free</Button>
          </div>

          <div>
            <Image
              className="w-full"
              src="https://placehold.jp/1500x800.png"
              alt="Neil Sims avatar"
              width={1500}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTeam;
