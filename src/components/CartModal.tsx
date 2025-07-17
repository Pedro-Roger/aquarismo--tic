"use client";
import { useCart } from "../context/CartProvider";
import React, { useState } from "react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

function CheckoutModal({ open, onClose, total, items }: { open: boolean; onClose: () => void; total: number; items: any[] }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    cep: "",
    endereco: "",
    pagamento: "cartao",
    numero: "",
    validade: "",
    cvv: "",
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.nome) newErrors.nome = "Nome obrigatório";
    if (!form.email) newErrors.email = "E-mail obrigatório";
    if (!form.cpf) newErrors.cpf = "CPF obrigatório";
    if (!form.telefone) newErrors.telefone = "Telefone obrigatório";
    if (!form.cep) newErrors.cep = "CEP obrigatório";
    if (!form.endereco) newErrors.endereco = "Endereço obrigatório";
    if (form.pagamento === "cartao") {
      if (!form.numero) newErrors.numero = "Número do cartão obrigatório";
      if (!form.validade) newErrors.validade = "Validade obrigatória";
      if (!form.cvv) newErrors.cvv = "CVV obrigatório";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        {success ? (
          <div className="py-16 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-xl font-bold text-green-700 mb-2">Compra finalizada!</div>
            <div className="text-gray-600">Obrigado por comprar conosco.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">Checkout</h2>
            {/* Resumo dos produtos */}
            <div className="bg-cyan-50 border border-cyan-200 rounded p-3 mb-4">
              <div className="font-semibold mb-2 text-cyan-800">Produtos:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>R${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={form.nome}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.nome && <span className="text-red-500 text-xs">{errors.nome}</span>}
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={form.cpf}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.cpf && <span className="text-red-500 text-xs">{errors.cpf}</span>}
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.telefone && <span className="text-red-500 text-xs">{errors.telefone}</span>}
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                value={form.cep}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.cep && <span className="text-red-500 text-xs">{errors.cep}</span>}
              <input
                type="text"
                name="endereco"
                placeholder="Endereço completo"
                value={form.endereco}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2"
              />
              {errors.endereco && <span className="text-red-500 text-xs">{errors.endereco}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Forma de pagamento:</label>
              <select
                name="pagamento"
                value={form.pagamento}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="cartao">Cartão de Crédito</option>
                <option value="boleto">Boleto Bancário</option>
              </select>
            </div>
            {form.pagamento === "cartao" ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="numero"
                  placeholder="Número do cartão"
                  value={form.numero}
                  onChange={handleChange}
                  required
                  className="border rounded px-3 py-2"
                />
                {errors.numero && <span className="text-red-500 text-xs">{errors.numero}</span>}
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="validade"
                    placeholder="Validade (MM/AA)"
                    value={form.validade}
                    onChange={handleChange}
                    required
                    className="border rounded px-3 py-2 w-1/2"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                    className="border rounded px-3 py-2 w-1/2"
                  />
                </div>
                {errors.validade && <span className="text-red-500 text-xs">{errors.validade}</span>}
                {errors.cvv && <span className="text-red-500 text-xs">{errors.cvv}</span>}
              </div>
            ) : (
              <div className="bg-cyan-50 border border-cyan-200 rounded p-3 text-center text-cyan-800">
                O boleto será gerado após finalizar a compra.
              </div>
            )}
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">Total: R$ {total.toFixed(2)}</span>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
              >
                Finalizar Pedido
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

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
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        onClick={handleOverlayClick}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 relative animate-fadeIn">
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
              onClick={() => setCheckoutOpen(true)}
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
      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} total={total} items={items} />
    </>
  );
}
