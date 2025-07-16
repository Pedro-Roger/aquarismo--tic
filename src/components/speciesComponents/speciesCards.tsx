import React from "react";

interface SpeciesCardProps {
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
    };
}

export default function SpeciesCard({ species }: SpeciesCardProps) {
    return (
        <div
            className="bg-gradient-to-br from-blue-100 via-white to-cyan-200 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] min-h-[480px]"
            style={{
                backdropFilter: "blur(2px)",
            }}
        >
            <div className="w-full flex justify-center items-center bg-gradient-to-t from-cyan-200 via-blue-100 to-white">
                <img
                    src={species.image}
                    alt={species.name}
                    className="w-40 h-40 object-cover rounded-full shadow-lg mt-6 border-4 border-white"
                />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between items-center w-full">
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-2xl text-blue-800 font-extrabold mb-1 drop-shadow-sm text-center">{species.name}</h3>
                    <p className="text-base text-cyan-700 italic mb-2 text-center">{species.scientificName}</p>
                    <p className="text-sm text-gray-700 mb-4 text-center">{species.description}</p>
                    <ul className="list-none p-0 m-0 mb-4 w-full flex flex-col gap-1 items-center">
                        <li className="text-sm flex items-center gap-1">
                            <span className="text-cyan-700 font-semibold">Tamanho mínimo do aquário:</span>
                            <span className="text-gray-900">{species.minTankSize} galões</span>
                        </li>
                        <li className="text-sm flex items-center gap-1">
                            <span className="text-cyan-700 font-semibold">Temperamento:</span>
                            <span className="text-gray-900">{species.temperament}</span>
                        </li>
                        <li className="text-sm flex items-center gap-1">
                            <span className="text-cyan-700 font-semibold">Dieta:</span>
                            <span className="text-gray-900">{species.diet}</span>
                        </li>
                        <li className="text-sm flex items-center gap-1 text-center">
                            <span className="text-cyan-700 font-semibold">Parâmetros da água:</span>
                            <span className="text-gray-900">
                                pH: {species.waterParameters.ph} | Temp: {species.waterParameters.temp} | GH: {species.waterParameters.gh}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 mt-4 w-full justify-center">
                    <button
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-xl shadow transition duration-150"
                        onClick={() => alert(`Comprar ${species.name} em breve!`)}
                    >
                        Comprar
                    </button>
                    <button
                        className="flex-1 bg-white border-0 text-cyan-700 font-bold py-2 px-4 rounded-xl shadow hover:bg-cyan-50 transition duration-150"
                        onClick={() => alert(`Ver detalhes de ${species.name} em breve!`)}
                    >
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
    );
}