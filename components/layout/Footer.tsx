import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="w-full flex justify-center items-center bg-white p-5">
      <div className="max-w-screen-lg w-full justify-between items-center flex text-primary">
        <div className="flex">
          <Link href="/">
            <a className="mx-12  font-bold text-base block">Home</a>
          </Link>
          <div>
            <Link href="/">
              <a className="mx-12 font-bold text-base block">About</a>
            </Link>
            <Link href="/">
              <a className="mx-12 font-bold text-gray-500 text-sm block">
                Mission
              </a>
            </Link>
            <Link href="/">
              <a className="mx-12 font-bold text-gray-500 text-sm block">
                Team
              </a>
            </Link>
          </div>
          <Link href="/">
            <a className="mx-12 text-sm font-bold block">Contact</a>
          </Link>
          <Link href="/">
            <a className="mx-12 text-sm  font-bold block">Work</a>
          </Link>
        </div>
        <div>
          <h2 className="mx-12 text-sm font-bold">Sample Company</h2>
          <h3 className="mx-12 text-xs">12345 Testing Street</h3>
          <h3 className="mx-12 text-xs">Indianapolis, IN 46202</h3>
          <h3 className="mx-12 text-xs">555.555.5555</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
