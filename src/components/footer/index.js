import Link from "next/link";
import { footerLinks } from "./footerData";
import { sizes } from "@/constants/sizes";

export const Footer = () => {
  return (
    <div
      style={{ height: `${sizes.footerHeight}vh` }}
      className="flex container justify-center mx-auto space-x-24"
    >
      <Link href={"/"} className="text-sm">
        My Blog Site
      </Link>
      <div className="space-x-8">
        {footerLinks.map((i, index) => (
          <Link
            key={index}
            href={i.link}
            className="text-sm hover:underline hover:text-amber-400"
          >
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
