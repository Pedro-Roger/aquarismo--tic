import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.aquaristz.com",
      "images.tcdn.com.br",
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "peixemania.com.br",
    ], // Adiciona aqui os domínios permitidos
  },
};

export default nextConfig;
