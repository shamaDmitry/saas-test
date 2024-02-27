import Banner from "@/Components/landing/pages/HomePage/Banner";
import Solutions from "@/Components/landing/pages/HomePage/Solutions";
import { Flex, Text, Button } from "@radix-ui/themes";

const Page = () => {
  return (
    <>
      <div className="bg-blue-500 py-10 text-white">
        <div className="container">
          <Banner />
        </div>
      </div>

      <Solutions />
    </>
  );
};

export default Page;
