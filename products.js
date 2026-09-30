/**
 * PRODUCTOS - Pandero Collection
 * Actualizado con modelos del catálogo Nike
 *
 * Para editar / agregar productos:
 * 1. Copia un objeto y pégalo al final del array.
 * 2. Cambia id, name, brand, colors, price, image, category.
 * 3. Guarda el archivo y súbelo de nuevo a GitHub.
 *
 * image: usa una URL de imagen pública.
 * colors: blanco, negro, rojo, azul, verde, beige, rosa, gris, dorado, naranja, morado
 */

const PRODUCTS = [
  // === Lifestyle / Casual ===
  {
    id: 1,
    name: "Nike Cortez",
    brand: "Nike",
    colors: ["blanco", "verde"],
    price: 520,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Air Max Verse",
    brand: "Nike",
    colors: ["beige", "azul"],
    price: 410,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Court Vision Lo",
    brand: "Nike",
    colors: ["beige", "blanco"],
    price: 350,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 4,
    name: "Court Vision Low",
    brand: "Nike",
    colors: ["beige", "negro"],
    price: 370,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 5,
    name: "Nike Janoski OG",
    brand: "Nike",
    colors: ["azul"],
    price: 385,
    category: "Skate",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 6,
    name: "Zoom Fly 5",
    brand: "Nike",
    colors: ["naranja", "rojo"],
    price: 725,
    category: "Running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 7,
    name: "Big Nike Low",
    brand: "Nike",
    colors: ["negro", "blanco"],
    price: 410,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 8,
    name: "Nike Pacific LTR",
    brand: "Nike",
    colors: ["verde", "blanco"],
    price: 355,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 9,
    name: "Nike Pacific",
    brand: "Nike",
    colors: ["azul", "beige"],
    price: 350,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 10,
    name: "Nike Pacific LTR",
    brand: "Nike",
    colors: ["blanco", "negro"],
    price: 355,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 11,
    name: "Court Vision Lo",
    brand: "Nike",
    colors: ["blanco", "naranja"],
    price: 330,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 12,
    name: "Nike Court Vision",
    brand: "Nike",
    colors: ["rojo", "blanco"],
    price: 360,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 13,
    name: "Nike Full Force Low",
    brand: "Nike",
    colors: ["gris"],
    price: 380,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 14,
    name: "Nike Field General",
    brand: "Nike",
    colors: ["gris", "beige"],
    price: 550,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    featured: true
  },
  // === Running ===
  {
    id: 15,
    name: "Nike Downshifter 13",
    brand: "Nike",
    colors: ["blanco"],
    price: 350,
    category: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 16,
    name: "Nike Downshifter 14",
    brand: "Nike",
    colors: ["blanco", "azul"],
    price: 320,
    category: "Running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 17,
    name: "Nike Run Defy",
    brand: "Nike",
    colors: ["verde"],
    price: 300,
    category: "Running",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 18,
    name: "Nike Pacific",
    brand: "Nike",
    colors: ["negro", "blanco"],
    price: 360,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 19,
    name: "Nike Journey Run",
    brand: "Nike",
    colors: ["negro"],
    price: 450,
    category: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 20,
    name: "Nike Downshifter 14",
    brand: "Nike",
    colors: ["blanco", "rojo"],
    price: 320,
    category: "Running",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 21,
    name: "Nike Structure Plus",
    brand: "Nike",
    colors: ["blanco", "verde"],
    price: 565,
    category: "Running",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 22,
    name: "Nike Vomero Plus",
    brand: "Nike",
    colors: ["naranja", "blanco"],
    price: 550,
    category: "Running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 23,
    name: "Air Max DN8",
    brand: "Nike",
    colors: ["negro", "verde"],
    price: 570,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 24,
    name: "Nike Free Metcon 6",
    brand: "Nike",
    colors: ["negro", "blanco"],
    price: 530,
    category: "Training",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 25,
    name: "Nike Air Winflo 11",
    brand: "Nike",
    colors: ["blanco", "naranja"],
    price: 490,
    category: "Running",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 26,
    name: "Nike Ava Rover",
    brand: "Nike",
    colors: ["gris", "rojo"],
    price: 600,
    category: "Running",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 27,
    name: "Nike V2K Run",
    brand: "Nike",
    colors: ["rosa", "morado"],
    price: 560,
    category: "Running",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 28,
    name: "Varsity Leather (GS)",
    brand: "Nike",
    colors: ["blanco"],
    price: 320,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 29,
    name: "Nike Air Max DN8 SE",
    brand: "Nike",
    colors: ["negro"],
    price: 620,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 30,
    name: "Nike Pegasus",
    brand: "Nike",
    colors: ["morado"],
    price: 470,
    category: "Running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 31,
    name: "Nike Quest 6",
    brand: "Nike",
    colors: ["blanco", "naranja"],
    price: 420,
    category: "Running",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 32,
    name: "P-6000",
    brand: "Nike",
    colors: ["beige"],
    price: 510,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    featured: true
  }
];

/* Número de WhatsApp (código de país + número, sin + ni espacios) */
const WHATSAPP_NUMBER = "51912345678";
