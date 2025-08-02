"use client"

import { sizes } from "@/constants/sizes";

export default function Contact() {
  const handleSubmit = (e) => { // e: React.FormEvent
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(data)
  }

  return (
    <div 
      style={{ minHeight: `${sizes.defaultScreenHeight}vh` }}
      className="flex container mx-auto justify-center items-center py-12"
    >
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">İletişime Geçin</h1>
          <p className="text-lg text-amber-600 font-bold">
            Sorularınız için bize ulaşın
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Adınız
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white dark:bg-neutral-700" 
                placeholder="Adınızı girin" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white dark:bg-neutral-700" 
                placeholder="E-posta adresinizi girin" 
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium mb-2">
                Konu
              </label>
              <input 
                type="text" 
                id="topic" 
                name="topic"
                required 
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white dark:bg-neutral-700" 
                placeholder="Mesaj konusunu girin" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mesaj
              </label>
              <textarea 
                id="message" 
                name="message"
                required 
                rows={5}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white dark:bg-neutral-700 resize-vertical" 
                placeholder="Mesajınızı buraya yazın"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mesajınızı aldıktan sonra en kısa sürede size dönüş yapacağız.
          </p>
        </div>
      </div>
    </div>
  );
}
