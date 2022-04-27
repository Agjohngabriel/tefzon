function GuestHeader() {
  return (
    <div className="flex flex-row py-7 px-20 text-right bg-white w-full">
      <div className="">
        <img src="/brand.png" alt="Tefzon Logo" className="w-32" />
      </div>
      <div className="w-full block flex-grow lg:flex">
        <div className="text-sm lg:flex-grow pt-4">
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal underline decoration-4 decoration-primary-100 mr-10">
            Home
          </a>
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal no-underline mr-10 tracking-tight">
            Prized
          </a>
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal no-underline mr-10 tracking-tight">
            Scout
          </a>
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal no-underline mr-10 tracking-tight">
            Statistics
          </a>
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal no-underline mr-10 tracking-tight">
            Help
          </a>
          <a className="font-arcon text-[0.80rem] text-black-100 font-normal no-underline mr-10 tracking-tight">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default GuestHeader;
