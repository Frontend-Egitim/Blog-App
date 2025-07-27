import { sizes } from "@/constants/sizes";
import Image from "next/image";
import Link from "next/link";

export default async function Slug({ params }) {
  const { id } = await params;
try {
    let allDataresponse = await fetch(
      `https://68848c66745306380a3896cc.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var allData = await allDataresponse.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
  } catch (error) {
    console.log(error);
  }

  try {
    let response = await fetch(
      `https://68848c66745306380a3896cc.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var data = await response.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
<div
  className="flex flex-col items-center justify-center bg bg-amber-100 p-6 rounded-4xl"
  style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
>
  <div className="bg-white rounded-4xl max-w-2xl w-full overflow-hidden">
    <Image
      src={data.image_url}
      alt=""
      width={300}
      height={300}
      className="rounded-4xl object-cover w-full h-[400px] "
    />

    <div className="p-6">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center font-mono">
        {data.title}
      </h2>

      <p className="text-gray-600 text-justify font-serif">
        {data.content}
      </p>
    </div>
  </div>
  <div className="flex m-7">
    {/* <Link href={`/blog/${parseInt(id)-1}`} className="bg-amber-600 text-amber-100 rounded-4xl  object-cover p-2 mt-3 m-2"
   >İLERİ</Link> */}
  <Link href={parseInt(id)+1<=allData.length ? `/blog/${parseInt(id)+1}` : "#"} className="bg-amber-600 text-amber-100 rounded-4xl  object-cover p-2 mt-3 m-2"
   >İLERİ</Link>
   
   </div>
</div>

  );
}
