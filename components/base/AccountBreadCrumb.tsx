const AccountBreadCrumb = () => {
  return (
    <div>
      <div className="bg-violet-500 pt-20 lg:pt-[20px]">
        <div className="flex justify-between ">
          <div className="ml-20 sm:w-1/2 mt-16  mb-12">
            <h2 className="font-oswald text-gray-100 font-bold text-5xl tracking-tighter leading-tight">
              Your Account
            </h2>
          </div>
          <div className="lg:w-1/2 flex-row-reverse ">
            <div className="mt-3 ml-20">
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
