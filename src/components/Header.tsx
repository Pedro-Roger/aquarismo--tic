"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-200 py-4 shadow-md border-b border-cyan-200">
      <div className="container mx-auto flex flex-col sm:flex-row items-center px-6">
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start gap-4 mb-3 sm:mb-0">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
          <button
            className="sm:hidden text-3xl px-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
        <nav className="w-full hidden sm:flex justify-center">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-6 text-[#006064] font-semibold text-base">
            <li>
              <Link href="/especies" className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200">Espécies</Link>
            </li>
            <li>
              <Link href="/acessorios" className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200">Acessórios</Link>
            </li>
            <li>
              <Link href="/sobre" className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex items-center w-full sm:w-auto justify-center sm:justify-end gap-4 mt-3 sm:mt-0">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200 text-2xl"
            aria-label="Abrir carrinho"
          >
            🛒
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="sm:hidden bg-white border-t border-cyan-200 shadow-md">
          <ul className="flex flex-col items-center gap-2 py-4 text-[#006064] font-semibold text-base">
            <li>
              <Link href="/especies" className="block px-4 py-2 w-full text-center hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200" onClick={() => setMenuOpen(false)}>Espécies</Link>
            </li>
            <li>
              <Link href="/acessorios" className="block px-4 py-2 w-full text-center hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200" onClick={() => setMenuOpen(false)}>Acessórios</Link>
            </li>
            <li>
              <Link href="/sobre" className="block px-4 py-2 w-full text-center hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200" onClick={() => setMenuOpen(false)}>Sobre</Link>
            </li>
            <li>
              <button
                onClick={() => { setOpen(true); setMenuOpen(false); }}
                className="px-4 py-2 rounded-full hover:bg-cyan-100 hover:text-[#00838f] transition-all duration-200 text-2xl w-full text-center"
                aria-label="Abrir carrinho"
              >
                🛒 Carrinho
              </button>
            </li>
          </ul>
        </nav>
      )}
      <CartModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
