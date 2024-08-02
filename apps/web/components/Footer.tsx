const Footer = () => {
  return (
    <div className="bg-violet-700">
      <footer className="bg-violet-700 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-11">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                LiteCode
              </span>
            </a>
            <a
            href = "https://github.com/VijayRavichander"
            className="text-white hover:underline"
            >
                Built at 
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;