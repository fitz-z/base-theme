import Link from "next/link";
import { Home, Info, Mail, Briefcase } from "react-feather";
const Navigation = (props) => {
  return (
    <div className="w-full flex justify-center items-center bg-white p-5">
      <div className="max-w-screen-lg w-full justify-between items-center flex text-primary-darkest">
        <div className="flex">
          <Link href="/">
            <a className="mx-3 font-bold text-lg flex items-center">
              <Home className="mr-1 h-5" />
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 font-bold text-lg flex items-center">
              <Info className="mr-1 h-5" />
              About
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 font-bold text-lg flex items-center">
              <Mail className="mr-1 h-5" />
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 font-bold text-lg flex items-center">
              <Briefcase className="mr-1 h-5" />
              Work
            </a>
          </Link>
        </div>
        <div className="text-primary-darkest">
          <Link href="/">
            <a className="mx-3 text-lg font-bold">Register</a>
          </Link>
          <Link href="/">
            <a className="mx-3 text-lg font-bold">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
