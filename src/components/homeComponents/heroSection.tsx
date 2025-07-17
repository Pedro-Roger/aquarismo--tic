"use client";
export default function HeroSection() {
  return (
    <section className="pt-8">
      <div
        className="
                    text-center 
                    px-5 
                    py-10 
                    bg-gradient-to-br 
                    from-cyan-100 
                    to-cyan-200 
                    mb-10 
                    rounded-[48px] 
                    shadow-[0_4px_24px_0_rgba(0,180,216,0.08)] 
                    max-w-[1200px] 
                    mx-auto
                "
      >
        <h2 className="text-center my-10 mb-7 text-[#006064] text-[2.2rem] font-bold">
          Sua loja definitiva para o Mundo Aquático
        </h2>
        <p className="text-[1.1rem] text-[#00838f] max-w-[700px] mx-auto mb-6">
          Descubra a beleza e a complexidade do aquarismo. Compre peixes e
          acessórios ou encontre informações detalhadas sobre cuidados.
        </p>
        <a
          href="/especies"
          className="
                        inline-block 
                        px-8 
                        py-3 
                        bg-teal-700 
                        text-white 
                        no-underline 
                        rounded-full 
                        font-bold 
                        transition-all 
                        duration-300 
                        hover:bg-teal-800 
                        hover:-translate-y-0.5 
                        hover:shadow-lg
                    "
        >
          Explore Espécies 🐠
        </a>
      </div>
    </section>
  );
}
