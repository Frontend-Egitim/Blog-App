/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*", // gelen bütün image url lerini kabul et manasına gelir
      },
    ],
  },
};

export default nextConfig;
