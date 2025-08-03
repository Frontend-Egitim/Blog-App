"use client";
import { sizes } from "@/constants/sizes";
import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <div
      style={{ height: `${sizes.navbarHeight}vh` }}
      className={`flex container justify-between mx-auto items-center`}
    >
      <Link href={"/"} className="text-2xl text-amber-400 whitespace-nowrap">
        MY BLOG SITE
      </Link>
      <div className=" flex space-x-8 list-none">
        {links.map((item, index) => (
          <Link href={item.path} key={index}>
            {item.title}
          </Link>
        ))}
      </div>{" "}
      {theme == "dark" ? (
        <SunIcon
          className="size-6 cursor-pointer hover:text-amber-400 transition-colors"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="size-6 cursor-pointer hover:text-amber-400 transition-colors"
          onClick={() => setTheme("dark")}
        />
      )}
      <button className="whitespace-nowrap bg-amber-100 text-amber-950 px-3 py-2 rounded-full">
        Sign In
      </button>
    </div>
  );
};
