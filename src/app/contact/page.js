<<<<<<< Updated upstream
import { sizes } from "@/constants/sizes";
=======
"use client"
import Image from "next/image";
>>>>>>> Stashed changes



export default function Contact() {
  function asd(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  console.log(data)
  
}

  return (
<<<<<<< Updated upstream
    <div
      className="border-2 flex flex-col mx-auto container"
      style={{ height: `${sizes.defaultScreenHeight}vh` }}
    >
      <div className="items-center text-center pt-24">
        <p>Bize ulaşmak için aşağıdaki formu doldurunuz</p>
      </div>
      <div className="m-12 flex">
        <form
          method="post"
          className="h-150 w-full py-[10%] text-center flex flex-col mx-150"
        >
          <label htmlFor="Name">Adınızı giriniz: </label>
          <input
            name="Name"
            type="text"
            className="border-1"
            placeholder="Ad"
          />
          <label htmlFor="Surname">Soyadınızı giriniz: </label>
          <input
            name="Surname"
            type="text"
            className="border-1"
            placeholder="Soyad"
          />
          <label htmlFor="Message">Mesajınızı giriniz: </label>
          <textarea
            name="Message"
            type="text"
            className="border-1"
            placeholder="Mesaj..."
          />
          <button className="mt-6 border-2 rounded-2xl">Gönder</button>
        </form>
      </div>
=======
    <div className="relative items-center flex justify-center text-center min-h-[92vh] w-[600px] bg-background container mx-auto ">
      <form method="post" onSubmit={asd} className="flex flex-col items-center min-w-3xl p-12 min-h-76 border-2 border-red-500 bg-blue-500  text-center justify-center gap-6">
        <input type="text" name="Ad" className="bg-white w-86 p-2 rounded-2xl text-black" placeholder="Ad" ></input>
        <input type="text" name="Soyad" className="bg-white p-2 w-86 rounded-2xl text-black" placeholder="Soyad" ></input>
        <textarea type="text" name="Mesaj" className="bg-white p-2  w-86 rounded-2xl text-black" placeholder="Mesajınız" ></textarea>
        <button type="submit" className="w-32 p-2 bg-white text-black rounded-2xl">Gönder</button>
      </form>
>>>>>>> Stashed changes
    </div>
  );
}
