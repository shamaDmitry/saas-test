import Banner from "@/Components/landing/pages/HomePage/Banner";
import FinancialTeam from "@/Components/landing/pages/HomePage/FinancialTeam/FinancialTeam";
import Pricing from "@/Components/landing/pages/HomePage/Pricing/Pricing";
import SolutionList from "@/Components/landing/pages/HomePage/Solution/SolutionList";

const Page = () => {
  return (
    <>
      <div className="bg-blue-500 py-10 text-white">
        <div className="container">
          <Banner />
        </div>
      </div>

      <SolutionList />

      <FinancialTeam />

      <Pricing />
    </>
  );
};

export default Page;
