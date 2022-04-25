import Image from "next/image";

export default function GuestFooter() {
  return (
    <div className="bg-primary-200 h-24 px-10 text-white flex flex-row items-center justify-between fixed w-screen bottom-0">
      <div>
        <h1>No Room for Racism</h1>
      </div>
      <div className="flex flex-row">
        {[
          {
            src: "/facebook.png",
            width: "18",
            height: "16",
          },
          {
            src: "/twitter.png",
            width: "18",
            height: "16",
          },
          {
            src: "/instagram.png",
            width: "18",
            height: "16",
          },
        ].map((item) => (
          <div className="mr-4">
            <Image src={item.src} width={item.width} height={item.height} />
          </div>
        ))}
      </div>
      <div>
        <span>Copy right</span>
      </div>
    </div>
  );
}
