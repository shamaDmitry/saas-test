import { Button, Heading, Text } from "@radix-ui/themes";

const Banner = () => {
  return (
    <section className="text-center max-w-screen-lg mx-auto">
      <Heading className="mb-6">We help to get business solution ever</Heading>

      <Text className="mb-6" as="p">
        We provide many features that you can use cheaply and easily. Try it now
        and get an interesting promo
      </Text>

      <div className="flex justify-center gap-4">
        <Button>Try for free</Button>
        <Button>Watch a demo</Button>
      </div>
    </section>
  );
};

export default Banner;
