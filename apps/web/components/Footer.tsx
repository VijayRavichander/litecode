import { Github } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-violet-700 max-h-screen">
      <footer className="bg-violet-700 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-7">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                LiteCode
              </span>
            </a>
            <div className="flex">
              <Link href="https://github.com/VijayRavichander/litecode">
                <div className="flex ">
                  <div className="text-white hover:text-black">Built at</div>
                  <div className="px-2">
                    <Github className="text-white hover:text-black"/>
                  </div>
                </div>

              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
