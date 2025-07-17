"use client";
import { useState } from "react";
import accessoriesData from "../../data/accessoriesData";
import AccessoriesCard from "../../components/accessoriesComponents/acessoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Acessorios() {
  const [search, setSearch] = useState("");
  const filtered = accessoriesData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-xl md:text-2xl font-medium text-blue-600 text-center mb-6">
        Nossos Acessórios
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Buscar acessório..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-cyan-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base"
        />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
        style={{ paddingBottom: "40px" }}
      >
        {filtered.length === 0 ? (
          <SwiperSlide>
            <div className="text-center text-gray-500 py-16">Nenhum acessório encontrado.</div>
          </SwiperSlide>
        ) : (
          filtered.map((item, idx) => (
            <SwiperSlide key={item.name + idx}>
              <AccessoriesCard item={{ ...item, idx }} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </main>
  );
}
