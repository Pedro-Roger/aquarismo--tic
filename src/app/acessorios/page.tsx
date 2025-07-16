"use client";
import accessoriesData from "../../data/accessoriesData";
import AccessoriesCard from "../../components/accessoriesComponents/acessoriesCard";

export default function Acessorios() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-xl md:text-2xl font-medium text-blue-600 text-center mb-6">
        Nossos Acessórios
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {accessoriesData.map((item, idx) => (
          <AccessoriesCard key={item.name + idx} item={{ ...item, idx }} />
        ))}
      </div>
    </main>
  );
}
