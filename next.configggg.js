// next.config.js

export async function rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:3000/api/:path*", // Replace 3000 with your Next.js port
    },
    {
      source: "/:subdomain/api/:path*",
      destination: "http://localhost:3000/api/:path*",
    },
    {
      source: "/:subdomain/:path*",
      destination: "http://localhost:3000/:path*",
    },
  ];
}
