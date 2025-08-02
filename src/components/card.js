import Link from "next/link";
import Image from "next/image";

export const Card = ({ item }) => {
  return (
    <Link
      href={`/blog/${item.id}`}
      key={item.id}
      className="p-2  bg-neutral-200 rounded-2xl h-[250px]"
    >
      <div>
        <Image
          src={item.image_url}
          width={300}
          height={200}
          alt=""
          className="object-cover rounded-xl h-[180px] w-[300px]"
        />
      </div>
      <h1>{item.title}</h1>
    </Link>
  );
};
