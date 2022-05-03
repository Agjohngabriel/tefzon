function GuestHeader() {
  return (
    <nav className="w-full bg-white shadow z-10">
      <div className="container mx-auto px-6 py-3 lg:px-20 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
          <a href="/">
            <img src="/brand.png" alt="logo" width="150px" />
          </a>
        </div>
        <div className="block md:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600">
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow md:flex md:justify-end md:w-auto">
          <div>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 under hover:text-blue-500 mt-4 md:mt-0"
            >
              Home
            </a>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              Price
            </a>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              Scout
            </a>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              Statistics
            </a>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              Help
            </a>
            <a
              href="#"
              className="font-arcon block md:inline-block text-sm px-1 lg:px-3 mr-4 py-2 leading-none rounded text-gray-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default GuestHeader;
