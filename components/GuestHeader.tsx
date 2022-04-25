function GuestHeader() {
  return (
    <div className="flex flex-row py-7 px-20 text-right bg-white w-full">
      <div className="">
        <img src="/brand.png" alt="Tefzon Logo" className="w-32" />
      </div>
      <div className="w-full block flex-grow lg:flex">
        <div className="text-sm lg:flex-grow pt-4">
          <a className="text-base text-black-100 font-normal underline decoration-4 dec decoration-primary mr-10">
            Home
          </a>
          <a className="text-base text-black-100 font-normal no-underline mr-10">
            Prized
          </a>
          <a className="text-base text-black-100 font-normal no-underline mr-10">
            Scout
          </a>
          <a className="text-base text-black-100 font-normal no-underline mr-10">
            Statistics
          </a>
          <a className="text-base text-black-100 font-normal no-underline mr-10">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}

export default GuestHeader;
