"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sizes } from "@/constants/sizes";
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/solid'


export const Navbar = () => {
  const [theme, setTheme] = useState(getTheme()); // Temayı state ile yönetiyoruz

  // Sayfa yüklendiğinde mevcut temayı kontrol et
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme]);

  // Tema değiştirme fonksiyonu
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme); // Temayı değiştir
  }

  // Mevcut temayı almak
  function getTheme() {
    return document.documentElement.getAttribute("data-mode") || "light";
  }

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
      className="flex container justify-between mx-auto items-center"
    >
      <Link href={"/"} className="text-2xl text-amber-400 whitespace-nowrap">
        MY BLOG SITE
      </Link>
      <div className="flex space-x-8 list-none">
        {links.map((item, index) => (
          <Link href={item.path} key={index}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* Tema değiştiren buton */}
      <button onClick={toggleTheme} className="p-2 rounded-full">
        {theme === "dark" ? <MoonIcon className="text-white h-6 w-6" /> : <SunIcon className="text-gray-700 h-6 w-6" />}
      </button>

      <button className="whitespace-nowrap bg-amber-100 text-amber-950 px-3 py-2 rounded-full">
        Sign In
      </button>
    </div>
  );
};
