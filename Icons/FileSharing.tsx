import { IconProps } from "@/types/Icons";

const FileSharing = (props: IconProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={17} cy={17} r={15} stroke="currentColor" strokeWidth="2.5" />
      <circle
        cx={17}
        cy={17}
        r="8.33333"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M23.6667 23.6667L27 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3333 23.6667L7.00001 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3333 10.3333L7.00001 6.99998"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6667 10.3333L27 6.99998"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileSharing;
