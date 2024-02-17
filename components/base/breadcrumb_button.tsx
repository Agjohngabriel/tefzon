import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
  title: String;
  link: String;
}
export const BreadCrumbButton = ({ title, link }: ButtonProps) => {
  const Router = useRouter();
  return (
    <div>
      <Link href={`${link}`} passHref>
        <div
          className={`font-Montserrat
           text-xs md:text-sm  px-1 w-[6rem] py-2 md:py-3 mx-1 text-center  leading-none rounded-t 
          cursor-pointer  ${
            Router.pathname.endsWith(`${link}`)
              ? "bg-white text-black-150"
              : "bg-green text-white"
          } hover:text-gray-700 font-semibold hover:bg-gray-100`}
        >
          {title}
        </div>
      </Link>
    </div>
  );
};
