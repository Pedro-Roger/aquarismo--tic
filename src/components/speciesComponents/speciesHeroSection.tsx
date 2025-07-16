"use client";
import SpeciesCard from "./speciesCards";
import fishData from "../../data/fishData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SpeciesHeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center  ">
      <h1 className="text-xl md:text-2xl font-medium text-blue-600 text-center mb-6">
        Nossas Espécies de Peixes
      </h1>
      <div className="w-full max-w-6xl flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
          style={{ paddingBottom: "40px" }}
        >
          {fishData.map((peixe) => (
            <SwiperSlide key={peixe.id} className="flex justify-center">
              <div className="flex justify-center h-full">
                <SpeciesCard species={peixe} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-blue-800 text-sm mt-6 text-center max-w-2xl">
        Explore nossa seleção de peixes de água doce, ideais para aquaristas de
        todos os níveis. Use as setas para navegar pelas espécies!
      </p>
    </section>
  );
}
