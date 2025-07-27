import { Card } from "@/components/card";
import { sizes } from "@/constants/sizes";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  try {
    let response = await fetch(
      "https://68848c4c745306380a389657.mockapi.io/blog" // bu linke get isteği atıyorum (çağırıyorum)
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
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
