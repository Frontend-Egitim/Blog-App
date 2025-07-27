// import { redirect } from "next/dist/server/api-utils";
import { sizes } from "@/constants/sizes";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Slug({ params }) {
  const { id } = await params;

  try {
    let response = await fetch(
      `https://68848c5b745306380a3896a3.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    if (response.ok) {
      var data = await response.json();
      return (
        <div className="flex container mx-auto">
          <div
            style={{ height: `${sizes.defaultScreenHeight}vh` }}
            className="relative w-[50%]"
          >
            <Image
              src={data.imageUrl}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[50%] p-4">
            <h1 className="text-center mb-6 text-6xl">{data.title}</h1>
            <p className="text-gray-300 mx-12  font-mono">{data.content}</p>
          </div>
        </div>
      );
      // lg:justify-start items-center lg:items-start">
    }
    redirect("/not-found");
  } catch (error) {
    console.log(error);
  }
}
