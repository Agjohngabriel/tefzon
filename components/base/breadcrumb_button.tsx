import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
  title: String;
  link: String;
}
export const BreadCrumbButton = ({ title, link }: ButtonProps) => {
  const Router = useRouter();
  return (
    <Link href={`${link}`} passHref>
      <div
        className={`font-montserrat  md:inline-block text-xs lg:text-sm  px-1 lg:w-36 py-2 mx-1 text-center sm:mx-2 leading-none rounded cursor-pointer ${
          Router.pathname.endsWith(`${link}`)
            ? "bg-white text-black-150"
            : "bg-green text-white"
        } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
      >
        {title}
      </div>
    </Link>
  );
};
