import { IconProps } from "@/types/Icons";

const Check = (props: IconProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 4.625L4.25 6.5L8.75 1.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
