"use client"

import { sizes } from "@/constants/sizes";
import Link from "next/link";
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

export const Navbar = () => {
   const [isDark, setter] = useState(false);

  const changeTheme = () => {
    setter(!isDark);
  };

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
      </div>
        
      <button onClick={changeTheme} className="p-2">
        {isDark ? (
          <SunIcon className="text-white h-6 w-6" />
        ) : (
          <MoonIcon className="text-gray-700 h-6 w-6" />
        )}
      </button>
      <button className="whitespace-nowrap bg-amber-100 text-amber-950 px-3 py-2 rounded-full">
        Sign In
      </button>
    </div>
  );
};
