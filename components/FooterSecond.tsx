import Image from "next/image";

export const FooterSecond = () => {
  return (
    <div className=" h-28 px-10 text-black-150 flex flex-row items-center justify-between w-full 2xl:h-36  shadow-inner shadow-slate-100">
      <div>
        <h1 className="font-montserrat">No Room for Racism</h1>
      </div>
      <div className="flex flex-row">
        {/* {[
          {
            src: "/facebook.png",
            width: "18",
            height: "16",
            alt: "Facebook Logo",
          },
          {
            src: "/twitter.png",
            width: "18",
            height: "16",
            alt: "Twitter Logo",
          },
          {
            src: "/instagram.png",
            width: "18",
            height: "16",
            alt: "Instagram Icon",
          },
        ].map((item) => (
          <div className="mr-4" key={item.src}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
          </div>
        ))} */}
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <span className="ml-2 material-icons hover:text-green-500">
            facebook
          </span>
          <span className="ml-2 material-icons hover:text-green-500">
            facebook
          </span>
          <span className="ml-2 material-icons hover:text-green-500">
            facebook
          </span>
        </div>
      </div>
      <div>
        <span className="font-poppins text-[0.60rem]">
          © 2023 All Simple Rights Reserved
        </span>
      </div>
    </div>
  );
};
