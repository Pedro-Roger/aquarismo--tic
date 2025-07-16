import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-200 py-4 shadow-md border-b border-cyan-200">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={72}
              height={72}
              className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-6 text-[#006064] font-semibold text-base">
            <li>
              <Link
                href="/especies"
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200"
              >
                Espécies
              </Link>
            </li>
            <li>
              <Link
                href="/acessorios"
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200"
              >
                Acessórios
              </Link>
            </li>
            <li>
              <Link
                href="/carrinho"
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200"
              >
                Carrinho
              </Link>
            </li>
            <li>
              <Link
                href="/guias"
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200"
              >
                Guias
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}