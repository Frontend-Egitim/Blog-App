import { sizes } from "@/constants/sizes";

export default function Contact() {
  return (
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
    </div>
  );
}
