import dynamic from "next/dynamic";

const DynamicIcon = ({ nameIcon, className }) => {
  const ElementIcon = dynamic(() => import(`@/Icons/${nameIcon}`), {
    ssr: false,
    loading: () => <p>loading</p>,
  });

  return <ElementIcon className={className} />;
};

export default DynamicIcon;
