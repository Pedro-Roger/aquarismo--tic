"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Peixe Beta",
      price: 24.99,
      description: "Peixe ornamental de cores vibrantes e fácil cuidado.",
      image: "🐟",
    },
    {
      id: 2,
      name: "Tetra Neon",
      price: 8.99,
      description: "Cardume de cores iridescentes que iluminam qualquer aquário.",
      image: "🐠",
    },
    {
      id: 3,
      name: "Coridora",
      price: 12.99,
      description: "Excelente limpador de fundo para aquários comunitários.",
      image: "🐡",
    },
    {
      id: 4,
      name: "Filtro Externo",
      price: 89.90,
      description: "Filtro eficiente para manter a água sempre limpa.",
      image: "🧊",
    },
    {
      id: 5,
      name: "Termostato 100W",
      price: 59.99,
      description: "Controle preciso da temperatura do seu aquário.",
      image: "🌡️",
    },
    {
      id: 6,
      name: "Planta Artificial",
      price: 14.50,
      description: "Decoração segura e realista para aquários.",
      image: "🌿",
    },
    {
      id: 7,
      name: "Ração Premium",
      price: 19.99,
      description: "Alimento balanceado para peixes tropicais.",
      image: "🍽️",
    },
    {
      id: 8,
      name: "Aquário 40L",
      price: 249.90,
      description: "Aquário de vidro temperado, ideal para iniciantes.",
      image: "🪟",
    },
    {
      id: 9,
      name: "Cascudo",
      price: 22.99,
      description: "Peixe de fundo resistente e ótimo para limpeza.",
      image: "🦑",
    },
    {
      id: 10,
      name: "Luminária LED",
      price: 79.90,
      description: "Iluminação eficiente para realçar as cores do aquário.",
      image: "💡",
    },
  ];

  return (
    <section className="mb-16">
      <div className="w-3/4 mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#006064] mb-8 text-center">
          Produtos em Destaque
        </h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="
                  bg-white/80
                  backdrop-blur-md
                  rounded-3xl
                  shadow-[0_8px_32px_0_rgba(0,180,216,0.12)]
                  border border-cyan-100
                  flex flex-col items-center
                  w-full
                  p-7
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                  hover:border-cyan-300
                  group
                  h-full
                  min-h-[420px]
                "
              >
                <div className="relative flex items-center justify-center w-24 h-24 mb-5 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 shadow-md group-hover:from-cyan-200 group-hover:to-cyan-100 transition-all duration-300">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <h3 className="text-[#0077b6] text-xl font-semibold mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-[1rem] text-center mb-4 min-h-[48px]">
                  {product.description}
                </p>
                <div className="font-bold text-[#006494] text-lg mb-4">
                  R$ {product.price.toFixed(2)}
                </div>
                <button
                  className="
                    bg-gradient-to-r from-[#2196f3] to-[#00bcd4]
                    hover:from-[#1565c0] hover:to-[#0097a7]
                    text-white
                    px-6 py-2
                    rounded-full
                    font-bold
                    shadow
                    transition-all
                    duration-300
                    mt-auto
                    outline-none
                    focus:ring-2 focus:ring-cyan-400
                  "
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}