import Image from "next/image";

export default async function Slug({ params }) {
  const { id } = await params;

  try {
    let response = await fetch(
      `https://68848c4d745306380a389663.mockapi.io/blog/${id}` // bu linke get isteği atıyorum (çağırıyorum)
    );
    var data = await response.json(); // response değişkeninin içindeki json türünde veriyi alıyorum.
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex container mx-auto">
      {data.image_url && (
        <Image
          src={data.image_url}
          width={300}
          height={200}
          className="object-cover flex container object-left  w-dvh rounded-bl-full  rounded-br-full pr-20 pl-5 pt-30 pb-30"
          alt=""
        />
      )}
      <div className="flex container mx-auto  flex-col items-center pt-6">
        <div>
          <h1 className="text-amber-900   text-3xl  border-t-amber-300  font-extrabold font-serif  text-center">
            {data.title}
          </h1>{" "}
        </div>
        <div className=" flex container mx-auto text-center pl-20   mt-5  font-serif font-bold text-gray-200"></div>{" "}
        {data.content}
        {data.content}
      </div>
    </div>
  );
}
