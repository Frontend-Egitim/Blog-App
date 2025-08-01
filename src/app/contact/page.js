import Image from "next/image";

export default function contact() {
  return (
    <>
      <div className="p-5 rounded-lg mb-4 w-full max-w-3xl mx-auto flex container">
        <h1 className="text-amber-900  font-mono text-5xl  border-t-amber-300  font-extrabold  mx-auto border-b-4  ">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center mb-10 px-4">
     <div className="rounded-t-full overflow-hidden border-10 border-amber-200 shadow-lg ">
        <Image
          src="https://www.kibar.com/-/media/images/pages/info/bize-ulasin-banner.jpg?h=448&la=en&w=1366&hash=B6989CAD05EDBC860591ADCECBA141D2EA445BB8"
          alt=""
          width={600}
          height={600}
          
          className="flex container  "
        />
      </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-amber-900 border-8 bg-clip-border border-amber-200 shadow-lg max-w-4xl p-6 rounded-2xl  space-y-4">
          <h2 className="text-3xl font-mono font-semibold text-amber-800 mb-4">Get in Touch</h2>

          <p className="text-yellow-950 font-mono text-2xl"><strong> Address:</strong> 1234 Main Street, İstanbul, Türkiye</p>
          <p className="text-yellow-950 font-mono text-2xl"><strong> Phone:</strong> +90 212 555 55 55</p>
          <p className="text-yellow-950 font-mono text-2xl"><strong> Email:</strong> info@example.com</p>
          <p className="text-yellow-950 font-mono text-2xl"><strong> Working Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>

    
    </>
  );
}
