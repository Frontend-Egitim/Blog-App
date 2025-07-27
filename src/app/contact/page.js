import Image from "next/image";

export default function contact() {
  return (
    <>
      <div className="p-5 rounded-lg mb-4 w-full max-w-3xl mx-auto flex container">
        <h1 className="text-amber-900   text-3xl  border-t-amber-300  font-extrabold font-serif  mx-auto border-b-4  ">
          Contact Us
        </h1>
      </div>
      <div className="flex container mx-auto">
        <Image
          src="https://www.usmarshals.gov/sites/default/files/styles/hero/public/acquiadam/contact-us-2400x1320.webp"
          alt=""
          width={300}
          height={500}
          fill
          className="object-cover flex container  rounded-bl-full  rounded-br-full "
        />
      </div>
    </>
  );
}
