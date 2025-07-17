"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "../../context/CartProvider";
import toast from "react-hot-toast";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "Peixe Beta",
      price: 24.99,
      description: "Peixe ornamental de cores vibrantes e fácil cuidado.",
      image:
        "https://www.aquaristz.com/wp-content/uploads/2018/11/peixe-beta-vermelho.jpg",
    },
    {
      id: 2,
      name: "Tetra Neon",
      price: 8.99,
      description:
        "Cardume de cores iridescentes que iluminam qualquer aquário.",
      image:
        "https://images.tcdn.com.br/img/img_prod/749804/tetra_neon_cardinal_1_a_3_cm_paracheirodon_axelrodi_913_1_fdf95d55f3a9e2695812dc4331475fef.jpg",
    },
    {
      id: 3,
      name: "Coridora",
      price: 12.99,
      description: "Excelente limpador de fundo para aquários comunitários.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucElP_IBLZVwdtmRrAULNkCa1bGj5KbReWQ&s",
    },
    {
      id: 4,
      name: "Filtro Externo",
      price: 89.9,
      description: "Filtro eficiente para manter a água sempre limpa.",
      image: "https://m.media-amazon.com/images/I/71f5JRzHCrL.jpg",
    },
    {
      id: 5,
      name: "Termostato 100W",
      price: 59.99,
      description: "Controle preciso da temperatura do seu aquário.",
      image:
        "https://m.media-amazon.com/images/I/61eSx8m-pcL._UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      name: "Planta Artificial",
      price: 14.5,
      description: "Decoração segura e realista para aquários.",
      image: "https://m.media-amazon.com/images/I/816MFwXQ49L.jpg",
    },
    {
      id: 7,
      name: "Ração Premium",
      price: 19.99,
      description: "Alimento balanceado para peixes tropicais.",
      image:
        "https://m.media-amazon.com/images/I/71liJdK+LYL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      name: "Aquário 40L",
      price: 249.9,
      description: "Aquário de vidro temperado, ideal para iniciantes.",
      image:
        "https://m.media-amazon.com/images/I/41nbGHEnL4L._UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      name: "Cascudo",
      price: 22.99,
      description: "Peixe de fundo resistente e ótimo para limpeza.",
      image:
        "https://peixemania.com.br/wp-content/uploads/2023/12/anatomia-interna-do-peixe-cascudo-02-736x470.jpg",
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
              <div>
                <Image
                  className="rounded-full object-cover w-32 h-32"
                  src={product.image}
                  alt={product.name}
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {product.description}
              </p>
              <span className="text-lg font-bold text-green-600 mb-4">
                R${product.price.toFixed(2)}
              </span>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  addToCart({
                    ...product,
                    id: product.id.toString(), // <- aqui está a correção
                  });
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
