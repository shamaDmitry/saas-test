import { IconProps } from "@/types/Icons";

const CloudDrive = (props: IconProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.66675 11.6667H8.83342C4.69128 11.6667 1.33342 15.0246 1.33342 19.1667C1.33342 23.3088 3.85795 26.6667 8.00009 26.6667H28.0001C32.1422 26.6667 34.6668 23.3088 34.6668 19.1667C34.6668 15.0246 31.3089 11.6667 27.1668 11.6667H26.3334V10C26.3334 5.39765 22.6025 1.66669 18.0001 1.66669C13.3977 1.66669 9.66675 5.39765 9.66675 10V11.6667Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloudDrive;
