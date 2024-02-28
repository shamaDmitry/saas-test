import Check from "@/Icons/Check";
import { Button, Card, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { pricingPlansFeaturesListData } from "./pricingPlansFeaturesListData";

const PricingCard = () => {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Heading className="mb-6">Standart</Heading>

      <Text as="p" size="3">
        The national average cost of buying coin easy.
      </Text>

      <div className="flex items-end">
        <div className="text-3xl">$5</div>
        <div>/month</div>
      </div>

      <Button>Select Plan</Button>

      <ul className="space-y-2">
        {pricingPlansFeaturesListData.standart.map((data) => {
          return (
            <li key={data.id} className="flex gap-x-2">
              <div className="bg-red-300 w-5 h-5 rounded-full flex items-center justify-center">
                <Check className="w-[7.5px]" />
              </div>
              <span>{data.text}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default PricingCard;
