"use client"
import { useState } from "react";

interface SpeciesDetailsProps {
  species: {
    id: string;
    name: string;
    scientificName: string;
    image: string;
    minTankSize: number;
    temperament: string;
    diet: string;
    waterParameters: {
      ph: string;
      temp: string;
      gh: string;
    };
    description: string;
    compatibleTankmates: string[];
    price: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function SpeciesDetails({ species, isOpen, onClose }: SpeciesDetailsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-100/80 via-white/80 to-blue-100/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={species.image}
                  alt={species.name}
                  className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">
                  {species.name}
                </h2>
                <p className="text-lg text-cyan-700 italic mb-3">
                  {species.scientificName}
                </p>
                <p className="text-2xl font-bold text-green-700 mb-4">
                  R$ {species.price.toFixed(2)}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {species.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-1">Tamanho mínimo do aquário</h4>
                      <p className="text-gray-700">{species.minTankSize} galões</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-1">Temperamento</h4>
                      <p className="text-gray-700">{species.temperament}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-1">Dieta</h4>
                      <p className="text-gray-700">{species.diet}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-1">Parâmetros da água</h4>
                      <p className="text-gray-700 text-sm">
                        pH: {species.waterParameters.ph}<br/>
                        Temperatura: {species.waterParameters.temp}<br/>
                        GH: {species.waterParameters.gh}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-700 mb-1">Companheiros compatíveis</h4>
                    <p className="text-gray-700">
                      {species.compatibleTankmates.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}