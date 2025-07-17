"use client";
import { useCart } from "../context/CartProvider";
import React, { useState } from "react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

type CartItem = { id: string; name: string; price: number; quantity: number };

function CheckoutModal({ open, onClose, total, items }: { open: boolean; onClose: () => void; total: number; items: CartItem[] }) {
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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-md xs:max-w-[95vw] mx-2 p-2 sm:p-4 relative animate-fadeIn overflow-y-auto max-h-[95vh]">
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4 text-center tracking-tight">Finalizar Pedido</h2>
            {/* Resumo dos produtos */}
            <div className="bg-gradient-to-br from-cyan-100 via-white to-blue-50 border border-cyan-200 rounded-2xl p-4 mb-4 shadow-sm">
              <div className="font-bold mb-2 text-cyan-900 text-lg flex items-center gap-2">
                <span className="text-2xl">🛒</span> Resumo do Pedido
              </div>
              <ul className="text-base text-gray-700 space-y-1 divide-y divide-cyan-100">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between py-1">
                    <span>{item.name} <span className='text-xs text-cyan-700'>x{item.quantity}</span></span>
                    <span className="font-semibold">R${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder=" "
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="nome" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">Nome completo</label>
                {errors.nome && <span className="text-red-500 text-xs block mt-1">{errors.nome}</span>}
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="email" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">E-mail</label>
                {errors.email && <span className="text-red-500 text-xs block mt-1">{errors.email}</span>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder=" "
                  value={form.cpf}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="cpf" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">CPF</label>
                {errors.cpf && <span className="text-red-500 text-xs block mt-1">{errors.cpf}</span>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  placeholder=" "
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="telefone" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">Telefone</label>
                {errors.telefone && <span className="text-red-500 text-xs block mt-1">{errors.telefone}</span>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  placeholder=" "
                  value={form.cep}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="cep" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">CEP</label>
                {errors.cep && <span className="text-red-500 text-xs block mt-1">{errors.cep}</span>}
              </div>
              <div className="relative sm:col-span-2">
                <input
                  type="text"
                  name="endereco"
                  id="endereco"
                  placeholder=" "
                  value={form.endereco}
                  onChange={handleChange}
                  required
                  className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                />
                <label htmlFor="endereco" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">Endereço completo</label>
                {errors.endereco && <span className="text-red-500 text-xs block mt-1">{errors.endereco}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="font-semibold text-cyan-800">Forma de pagamento</label>
              <select
                name="pagamento"
                value={form.pagamento}
                onChange={handleChange}
                className="border-2 border-cyan-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 bg-white transition"
              >
                <option value="cartao">Cartão de Crédito</option>
                <option value="boleto">Boleto Bancário</option>
              </select>
            </div>
            {form.pagamento === "cartao" ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="relative sm:col-span-2">
                  <input
                    type="text"
                    name="numero"
                    id="numero"
                    placeholder=" "
                    value={form.numero}
                    onChange={handleChange}
                    required
                    className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                  />
                  <label htmlFor="numero" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">Número do cartão</label>
                  {errors.numero && <span className="text-red-500 text-xs block mt-1">{errors.numero}</span>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="validade"
                    id="validade"
                    placeholder=" "
                    value={form.validade}
                    onChange={handleChange}
                    required
                    className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                  />
                  <label htmlFor="validade" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">Validade</label>
                  {errors.validade && <span className="text-red-500 text-xs block mt-1">{errors.validade}</span>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder=" "
                    value={form.cvv}
                    onChange={handleChange}
                    required
                    className="peer border-2 border-cyan-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 bg-white placeholder-transparent transition"
                  />
                  <label htmlFor="cvv" className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700 bg-white px-1">CVV</label>
                  {errors.cvv && <span className="text-red-500 text-xs block mt-1">{errors.cvv}</span>}
                </div>
              </div>
            ) : (
              <div className="bg-cyan-50 border border-cyan-200 rounded p-3 text-center text-cyan-800 mt-2">
                O boleto será gerado após finalizar a compra.
              </div>
            )}
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold text-xl text-blue-900">Total: R$ {total.toFixed(2)}</span>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:from-green-600 hover:to-cyan-600 transition text-lg"
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
