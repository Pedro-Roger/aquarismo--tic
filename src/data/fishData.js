// src/data/fishData.js

const fishData = [
  {
    id: "guppy",
    name: "Guppy",
    scientificName: "Poecilia reticulata",
    image:
      "https://www.adorepets.com.br/images/adorepets/racas/peixes/2024/guppy.webp#joomlaImage://local-images/adorepets/racas/peixes/2024/guppy.webp?width=1300&height=874", // Imagem de exemplo
    minTankSize: 5, // galões
    temperament: "Pacífico",
    diet: "Onívoro",
    waterParameters: {
      ph: "6.5-7.5",
      temp: "22-28°C",
      gh: "8-12",
    },
    description:
      "O Guppy é um dos peixes de água doce mais populares, conhecido por suas cores vibrantes e caudas elegantes. É um peixe de cardume e de reprodução fácil, ideal para iniciantes.",
    compatibleTankmates: ["Corydoras", "Neon Tetra", "Otocinclus"],
  },
  {
    id: "neon-tetra",
    name: "Neon Tetra",
    scientificName: "Paracheirodon innesi",
    image:
      "https://coburgaquarium.com.au/cdn/shop/products/NeonTetra_1200x1000px.jpg?v=1668659269", // Imagem de exemplo
    minTankSize: 10, // galões
    temperament: "Pacífico",
    diet: "Onívoro",
    waterParameters: {
      ph: "6.0-7.0",
      temp: "20-26°C",
      gh: "1-2",
    },
    description:
      "O Neon Tetra é um peixe pequeno e colorido, famoso por sua faixa azul brilhante e vermelha. Eles são peixes de cardume e prosperam em grupos de 6 ou mais.",
    compatibleTankmates: ["Guppy", "Corydoras", "Otocinclus"],
  },
  {
    id: "betta",
    name: "Betta Fish",
    scientificName: "Betta splendens",
    image:
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2025/03/13175316/betta-fish-facts-1024x797.jpg", // Imagem de exemplo
    minTankSize: 5, // galões (com filtro e aquecedor)
    temperament: "Territorial",
    diet: "Carnívoro",
    waterParameters: {
      ph: "6.5-7.5",
      temp: "24-27°C",
      gh: "3-5",
    },
    description:
      "O Betta, ou peixe-de-briga-siamês, é conhecido por suas cores deslumbrantes e barbatanas fluidas. Machos são geralmente mantidos sozinhos devido à sua agressividade.",
    compatibleTankmates: [
      "Nenhum (para machos)",
      "Corydoras (com cautela para fêmeas)",
    ],
  },
  {
    id: "corydoras-catfish",
    name: "Corydoras Catfish",
    scientificName: "Corydoras aeneus", // Exemplo, existem muitas espécies
    image:
      "https://www.topfinaquatics.co.nz/cdn/shop/files/Emerald-Green-Corydora-2-Small_1800x1800_b57444c9-7c9c-4c64-8112-f330d9230181.webp?v=1716111622", // Imagem de exemplo
    minTankSize: 10, // galões (para um pequeno grupo)
    temperament: "Pacífico",
    diet: "Onívoro (comprimidos de fundo)",
    waterParameters: {
      ph: "6.0-7.5",
      temp: "22-26°C",
      gh: "2-10",
    },
    description:
      "Corydoras são bagres de fundo pacíficos e ativos, que são excelentes limpa-fundos. Eles são peixes de cardume e se beneficiam de grupos de 6 ou mais.",
    compatibleTankmates: ["Guppy", "Neon Tetra", "Betta (com cautela)"],
  },
];

export default fishData;
