import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Link href="/">Logo</Link>

            <p className="flex flex-col">
              <span>Manage file easily.</span>
              <span>Everywhere, everytime.</span>
            </p>
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>

      <div className="text-center p-4">
        &copy;{new Date().getFullYear()} GrounDesk. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
