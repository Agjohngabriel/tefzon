import Image from "next/image";

export default function GuestFooter() {
  return (
    <div className="bg-[#6544DE]  h-28 py-9 sm:py-5 text-center px-16 lg:px-20 text-white sm:flex flex-row items-center justify-between w-full 2xl:h-36 bottom-0">
      <div>
        <h1 className="font-montserrat">No Room for Racism</h1>
      </div>
      <div className="flex flex-row mx-12 my-5 sm:my-1 sm:mx-24 items-center">
        {[
          {
            src: "/facebook.png",
            width: 18,
            height: 17,
            alt: "Facebook Logo",
          },
          {
            src: "/twitter.png",
            width: 18,
            height: 17,
            alt: "Twitter Logo",
          },
          {
            src: "/instagram.png",
            width: 18,
            height: 17,
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
        <span className="font-poppins text-[0.70rem]">
          © 2024 All Simple Rights Reserved
        </span>
      </div>
    </div>
  );
}
