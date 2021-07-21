import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="w-full flex justify-center items-center bg-primary p-5">
      <div className="max-w-screen-lg w-full justify-between items-center flex text-white">
        <div>
          <Link href="/">
            <a className="mx-12 text-xs block">Home</a>
          </Link>
          <Link href="/">
            <a className="mx-12 text-xs block">About</a>
          </Link>
          <Link href="/">
            <a className="mx-12 text-xs block">Contact</a>
          </Link>
          <Link href="/">
            <a className="mx-12 text-xs block">Work</a>
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
