"use client";
import { useCart } from "../context/CartProvider";
import React from "react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 relative animate-fadeIn">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <h2 className="text-2xl font-bold text-gray-800">
              Carrinho de Compras
            </h2>
          </div>
          <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 text-sm font-semibold">
            {items.length} {items.length === 1 ? "item" : "itens"}
          </span>
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {/* Lista de produtos */}
        <div className="divide-y divide-gray-200">
          {items.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-lg">
              Seu carrinho está vazio.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <div className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    R${item.price.toFixed(2)} × {item.quantity}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="border rounded px-2 py-1 text-lg hover:bg-gray-100"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className="min-w-[24px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    className="border rounded px-2 py-1 text-lg hover:bg-gray-100"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                  <button
                    className="ml-2 text-red-500 hover:text-red-700 text-xl"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remover item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumo do pedido */}
        <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-6">
          <div className="flex justify-between items-center mb-2 text-gray-700 text-lg">
            <span>Subtotal:</span>
            <span>R${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2 text-gray-700 text-lg">
            <span>Frete:</span>
            <span className="text-green-600 font-semibold">Grátis</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center text-xl font-bold text-gray-900">
            <span>Total:</span>
            <span>R${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Continuar Comprando
          </button>
          <button
            className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
            disabled={items.length === 0}
            onClick={() => alert("Compra finalizada!")}
          >
            Finalizar Compra
          </button>
          <button
            className="flex-1 bg-white border border-red-400 text-red-500 font-bold py-3 rounded-lg hover:bg-red-50 hover:border-red-600 transition"
            disabled={items.length === 0}
            onClick={clearCart}
          >
            Limpar Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
