"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "../../context/CartProvider";
import toast from "react-hot-toast";

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
      description:
        "Cardume de cores iridescentes que iluminam qualquer aquário.",
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
      price: 89.9,
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
      price: 14.5,
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
      price: 249.9,
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
  ];

  const { addToCart } = useCart();

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
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
        className="w-full max-w-6xl mx-auto"
        style={{ paddingBottom: "40px" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs">
              <span className="text-6xl mb-4">{product.image}</span>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              <span className="text-lg font-bold text-green-600 mb-4">R${product.price.toFixed(2)}</span>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  addToCart(product);
                  toast.success("Produto adicionado ao carrinho!");
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
