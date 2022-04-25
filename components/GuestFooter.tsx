import Image from "next/image";

export default function GuestFooter() {
  return (
    <div className="bg-primary-200 h-24 px-10 text-white flex flex-row items-center justify-between w-full fixed bottom-0 shadow-inner">
      <div>
        <h1>No Room for Racism</h1>
      </div>
      <div className="flex flex-row">
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
        <span>Copy right</span>
      </div>
    </div>
  );
}
