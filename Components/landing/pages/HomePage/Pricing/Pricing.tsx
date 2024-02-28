import { Heading, Text } from "@radix-ui/themes";

import React from "react";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <section className="py-10">
      <div className="container text-center">
        <Heading className="mb-6">Our pricing</Heading>

        <Text className="mb-6" as="p">
          Pay securely online and manage the booking via desktop or via the
          mobile app.
        </Text>

        <PricingList />
      </div>
    </section>
  );
};

export default Pricing;
