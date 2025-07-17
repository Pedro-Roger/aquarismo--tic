"use client";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-100 via-blue-100 to-cyan-200 border-t border-cyan-200 py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-[#006064] text-sm font-medium">
          &copy; {new Date().getFullYear()} Meu Aquarismo. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}




