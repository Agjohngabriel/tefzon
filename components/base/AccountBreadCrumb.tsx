const AccountBreadCrumb = () => {
  return (
    <div>
      <div className="bg-violet-500  lg:pt-[20px] md:pt-[5px] pt-3 justify-between">        
        <div className="flex justify-between ">
          <div className="ml-10 sm:ml-20 w-1/2 mt-10 sm:mt-16  lg:mb-12">
            <h2 className="font-oswald text-gray-100 font-bold text-sm sm:text-2xl lg:text-5xl tracking-tighter leading-tight">
            Your Account
            </h2>
          </div>
          <div className="sm:w-1/2 justify-end ">
            <div className="sm:mt-3 sm:ml-20">
              <img
                src="/img/Header Image.png"
                alt="soccer"
                className="relative animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBreadCrumb;
