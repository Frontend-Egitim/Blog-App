import Image from "next/image";

export default function Home() {
  return (
    <div className="flex container mx-auto">
      {/* Image */}
      <div className="w-full">
        <Image
          src="/images/kod.jpg"
          sizes="100wv"
          width={0}
          height={0}
          alt="Picture of the author"
          className={"w-full"}
        />
      </div>

      {/* slogan */}
      <div className="w-full">
        <div className="flex flex-col items-center h-full justify-center">
          <h1 className="text-4xl font-extrabold">BEST FOR THE BEST</h1>
          <p className="text-sm text-amber-600">
            High quality coding lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
