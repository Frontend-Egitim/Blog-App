import { sizes } from "@/constants/sizes";
import Image from "next/image";
import Link from "next/link";

export default async function Slug({ params }) {
  const { id } = await params;

  try {
    let allDataResponse = await fetch(
      `https://68848c4c745306380a389657.mockapi.io/blog` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var allData = await allDataResponse.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
  } catch (error) {
    console.log(error);
  }

  try {
    let response = await fetch(
      `https://68848c4c745306380a389657.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var data = await response.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div
      style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
      className="container mx-auto flex flex-col space-between"
    >
      <div className="flex  space-x-6">
        <Image
          src={data.image_url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-[50%] h-auto self-start"
        />
        <div className="gap-6">
          <h1 className="text-5xl font-mono mb-6">{data.title}</h1>
          <p className="dark:text-gray-200 font-mono text-gray-700">{data.content}</p>
        </div>
      </div>
      <Link
        className="flex text-xl text-end pb-10"
        href={
          parseInt(id) + 1 <= allData.length ? `/blog/${parseInt(id) + 1}` : "#"
        }
      >
        Sonraki Yazıya Git
      </Link>
    </div>
  );
}
