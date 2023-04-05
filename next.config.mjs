/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   async headers() {
    return [
      {
        source: "/:file*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://replit.com" },
        ]
      }
    ]
  }
};

export default nextConfig;