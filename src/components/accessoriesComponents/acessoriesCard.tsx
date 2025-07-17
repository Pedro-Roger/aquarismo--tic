"use client";
import { useCart } from "../../context/CartProvider";
import toast from "react-hot-toast";

interface AccessoriesCardProps {
  item: {
    name: string;
    type: string;
    price: number;
    description: string;
    mark: string;
    idx: number;
  };
}

export default function AccessoriesCard({ item }: AccessoriesCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className="bg-gradient-to-br from-blue-100 via-white to-cyan-200 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] min-h-[280px] p-4 w-full max-w-[240px] min-w-[160px] h-[320px]"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div className="w-full flex justify-center items-center bg-gradient-to-t from-cyan-200 via-blue-100 to-white mb-4 rounded-2xl">
        <span
          className="text-6xl select-none"
          role="img"
          aria-label="Acessório"
        >
          🧰
        </span>
      </div>
      <h3 className="text-xl text-blue-800 font-bold mb-1 text-center">
        {item.name}
      </h3>
      <p className="text-base text-cyan-700 italic mb-2 text-center">
        {item.type} - {item.mark}
      </p>
      <p className="text-sm text-gray-700 mb-4 text-center">
        {item.description}
      </p>
      <div className="font-bold text-[#006494] text-lg mb-2">
        R$ {item.price.toFixed(2)}
      </div>
      <div className="flex gap-2 mt-auto w-full justify-center">
        <button
          className="flex-1 min-w-[80px] max-w-[100px] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-1 px-2 rounded-xl shadow transition duration-150 text-sm"
          onClick={() => {
            addToCart({
              id: item.name + "-" + item.idx,
              name: item.name,
              price: item.price,
            });
            toast.success("Produto adicionado ao carrinho!");
          }}
        >
          Comprar
        </button>
        <button
          className="flex-1 min-w-[80px] max-w-[100px] bg-white border-2 border-cyan-400 text-cyan-700 font-bold py-1 px-2 rounded-xl shadow hover:bg-cyan-50 transition duration-150 text-sm"
          onClick={() => {
            addToCart({
              id: item.name + "-" + item.idx,
              name: item.name,
              price: item.price,
            });
            toast.success("Produto adicionado ao carrinho!");
          }}
        >
          Carrinho
        </button>
      </div>
    </div>
  );
}
