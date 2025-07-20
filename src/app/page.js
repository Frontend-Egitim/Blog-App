import { sizes } from "@/constants/sizes";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
      className={`flex container mx-auto flex-col lg:flex-row space-y-10 justify-center items-center `}
    >
      {/* Image */}
      <div className="w-full h-full">
        <Image
          src="/images/kod.jpg"
          sizes="100wv"
          width={0}
          height={0}
          alt="Picture of the author"
          className={"w-full rounded-4xl"}
        />
      </div>
      {/* slogan */}
      <div className="w-full">
        <div className="flex flex-col items-center h-full justify-center">
          <h1 className="text-4xl font-extrabold text-center">
            BEST FOR THE BEST
          </h1>
          <p className="text-lg text-amber-600 font-bold">
            High quality coding lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
