interface FooProp {
  name: string;
  X: number;
  Y: number;
}
declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}
const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);

interface DynamicIconProps {
  nameIcon: string;
  className: string;
}

import IconSkeleton from "@/Components/landing/skeletons/IconSkeleton";
import dynamic from "next/dynamic";
import React from "react";

const DynamicIcon = ({ nameIcon, className }: DynamicIconProps) => {
  const ElementIcon = dynamic(() => import(`@/Icons/${nameIcon}`), {
    ssr: false,
    loading: () => <IconSkeleton />,
  });

  return <ElementIcon className={className} />;
};

export default DynamicIcon;
