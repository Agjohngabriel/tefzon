import Image from "next/image";

export default function GuestFooter() {
  return (
    <div className="bg-primary-200 h-28 py-5 text-center px-10 text-white sm:flex flex-row items-center justify-between w-full 2xl:h-36 bottom-0 shadow-inner shadow-slate-100">
      <div>
        <h1 className="font-montserrat">No Room for Racism</h1>
      </div>
      <div className="flex flex-row mx-24 items-center">
        {[
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
        ))}
      </div>
      <div>
        <span className="font-poppins text-[0.60rem]">
          © 2022 All Simple Rights Reserved
        </span>
      </div>
    </div>
  );
}
