"use client";
export default function Suggestions() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-6xl mx-auto">
      <div
        className="
          bg-white/60
          backdrop-blur-lg
          border border-cyan-100
          rounded-3xl
          shadow-[0_8px_32px_0_rgba(0,180,216,0.12)]
          p-8
          flex flex-col items-center
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl
          hover:border-cyan-300
        "
      >
        <h3 className="text-[#006064] mt-0 text-xl font-bold mb-2 flex items-center gap-2">
          <span className="text-3xl">🐟</span> Conheça Peixes
        </h3>
        <p className="text-[#00838f] text-center text-base">
          Explore nossa vasta base de dados de espécies de peixes, com detalhes sobre compatibilidade, dieta e requisitos de tanque.
        </p>
      </div>
      <div
        className="
          bg-white/60
          backdrop-blur-lg
          border border-cyan-100
          rounded-3xl
          shadow-[0_8px_32px_0_rgba(0,180,216,0.12)]
          p-8
          flex flex-col items-center
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl
          hover:border-cyan-300
        "
      >
        <h3 className="text-[#006064] mt-0 text-xl font-bold mb-2 flex items-center gap-2">
          <span className="text-3xl">🌿</span> Aprenda sobre Plantas
        </h3>
        <p className="text-[#00838f] text-center text-base">
          Descubra as melhores plantas para seu aquário, suas necessidades de luz, CO₂ e muito mais.
        </p>
      </div>
      <div
        className="
          bg-white/60
          backdrop-blur-lg
          border border-cyan-100
          rounded-3xl
          shadow-[0_8px_32px_0_rgba(0,180,216,0.12)]
          p-8
          flex flex-col items-center
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl
          hover:border-cyan-300
        "
      >
        <h3 className="text-[#006064] mt-0 text-xl font-bold mb-2 flex items-center gap-2">
          <span className="text-3xl">📚</span> Guias Completos
        </h3>
        <p className="text-[#00838f] text-center text-base">
          Desde a montagem inicial até a manutenção avançada, nossos guias te ajudarão em cada etapa.
        </p>
      </div>
    </section>
  );
}