import DynamicIcon from "@/Icons/_DynamicIcon";
import { Card } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const SolutionCard = ({ data }) => {
  return (
    <Card key={data.id}>
      <div className="bg-gray-100 w-16 h-16 rounded-2xl mb-6 flex items-center justify-center">
        <DynamicIcon
          nameIcon={data.icon}
          className="w-10 h-10 text-fuchsia-800"
        />
      </div>

      <div>{data.title}</div>

      <p>{data.body}</p>

      <Link href={data.link}>Learn more</Link>
    </Card>
  );
};

export default SolutionCard;
