import { sizes } from "@/constants/sizes";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  try {
    let response = await fetch(
      "https://68848c4d745306380a389663.mockapi.io/Blog" // bu linke get isteği atıyorum (çağırıyorum)
    );
    var data = await response.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div
      className="flex container mx-auto space-x-4"
      style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
    >
      {data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          key={item.id}
          className="p-2 card bg-amber-950 rounded-2xl h-[250px]"
        >
          <Image
            src={item.image_url}
            width={300}
            height={200}
            alt=""
            className="object-cover rounded-xl h-[180px] w-[300px]"
          />
          <h1 className="text-xl font-bold ">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
}
