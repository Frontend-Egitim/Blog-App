import { sizes } from "@/constants/sizes";
import Image from "next/image";

export default function AboutPage() {
  const sections = [
    {
      image:
        "https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg",
      title: "Biz Kimiz?",
      content:
        "Yenilikçi, tutkulu ve çözüm odaklı bir ekibiz. Teknoloji ve insanı merkeze alan projelerle 2015 yılından bu yana müşterilerimize değer katıyoruz. Güvenilirlik ve şeffaflık ilkeleriyle büyüyen bir topluluğuz.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2022/03/26/09/24/dog-7092595_960_720.jpg",
      title: "Vizyonumuz",
      content:
        "Sektörde öncü, kullanıcı odaklı ve sürdürülebilir çözümler geliştiren bir marka olmak. Geleceğin dijital dünyasında fark yaratan projelere imza atarak, insan hayatına pozitif katkı sunmayı hedefliyoruz.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2021/07/18/18/36/tree-6476331_960_720.jpg",
      title: "Misyonumuz",
      content:
        "Teknolojiyi insan yararına kullanarak kaliteli, erişilebilir ve yenilikçi hizmetler sunmak. Her adımda etik değerlere bağlı kalarak kullanıcı memnuniyetini en üst seviyede tutmak temel misyonumuzdur.",
    },
  ];

  return (
    <div
      style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
      className="flex space-y-16 flex-col container mx-auto py-12"
    >
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "flex-row-reverse" : null}`}
          >
            <div className="mx-12 flex flex-col justify-center ">
              <h1
                className={`text-4xl ${
                  index % 2 === 0 ? "text-left" : "text-right"
                } mb-16`}
              >
                {section.title}
              </h1>
              <p>{section.content}</p>
            </div>
            <Image
              src={section.image}
              width={0}
              height={0}
              sizes="100vw"
              alt="nothing"
              className="object-cover w-3xl h-3xl rounded-2xl"
            />
          </div>
        );
      })}
    </div>
  );
}
