import Link from "next/link";

const Navigation = (props) => {
  return (
    <div className="w-full flex justify-center items-center bg-background-1 p-5">
      <div className="max-w-screen-lg w-full justify-between items-center flex text-gray-600">
        <div>
          <Link href="/">
            <a className="mx-3 font-bold text-lg">Home</a>
          </Link>
          <Link href="/">
            <a className="mx-3 font-bold text-lg ">About</a>
          </Link>
          <Link href="/">
            <a className="mx-3 font-bold text-lg">Contact</a>
          </Link>
          <Link href="/">
            <a className="mx-6 font-bold text-lg">Work</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="mx-3 text-lg text-primary-1 font-bold">Register</a>
          </Link>
          <Link href="/">
            <a className="mx-3 text-lg text-primary-2 font-bold">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
