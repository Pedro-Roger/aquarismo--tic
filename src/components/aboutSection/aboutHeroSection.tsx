"use client"
import Link from "next/link";
import Image from "next/image";

export default function AboutHeroSection() {

  const images = [
    { image: "/pedro.jfif", name: "Pedro" },
    { image: "/thiago.jfif", name: "Thiago" },
    { image: "/jonas.jfif", name: "Jonas" },
    { image: "/matheus.jfif", name: "Matheus" },
    { image: "/julia.png", name: "Julia" },
  ]

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/aquarium-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/90"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Aquario
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Sua jornada no mundo aquático começa aqui
          </p>
          <span className="bg-orange-500 text-white text-lg px-6 py-2 rounded-full inline-block shadow-lg">
            Especialistas em Aquarismo há 15 anos
          </span>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sobre o Aquario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos apaixonados pelo mundo aquático e dedicados a trazer a beleza e tranquilidade dos oceanos para sua casa
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Nossa História
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundada em 2009, o Aquario nasceu da paixão de uma família pelo aquarismo. O que começou como um hobby transformou-se numa missão: compartilhar o conhecimento e a beleza do mundo aquático com todos os entusiastas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ao longo de 15 anos, construímos uma reputação sólida baseada na expertise, qualidade dos produtos e atendimento personalizado. Nosso compromisso é com a saúde e bem-estar dos seus peixes e plantas aquáticas.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/peixe.jpg" alt="Peixe decorativo" className="h-80 w-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa Equipe
            </h3>
            <p className="text-lg text-gray-600">
              Conheça os especialistas que fazem do Aquario uma referência no aquarismo
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              {images.map((person, index) => (
                <div key={index} className="text-center w-40">
                  <div className="rounded-full shadow-xl bg-white flex items-center justify-center p-2 transition-transform hover:scale-105 mb-4 w-36 h-36 mx-auto">
                    <Image
                      className="rounded-full object-cover w-32 h-32"
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{person.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 animate-swim">
        <img src="/peixee.png" alt="Peixe nadando" className="h-20 w-auto" />
      </div>
      <style jsx>{`
        @keyframes swim {
          0% { left: -120px; }
          100% { left: 100vw; }
        }
        .animate-swim {
          animation: swim 12s linear infinite;
        }
      `}</style>
    </>
  );
}