import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative h-[400px] w-[600px] bg-background container mx-auto ">
      <Image
        src={
          "https://iasbh.tmgrup.com.tr/4b868f/1200/627/0/69/724/448?u=https://isbh.tmgrup.com.tr/sbh/2023/03/03/karga-turleri-nelerdir-dunyada-ve-turkiyede-yasayan-karga-cesitleri-isimleri-ve-ozellikleri-e1-1677831354787.jpg"
        }
        fill
        alt=""
        className="object-contain"
      />
    </div>
  );
}
