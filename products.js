/**
 * PRODUCTOS - Pandero Collection
 * 
 * Para editar / agregar productos:
 * 1. Copia un objeto y pégalo al final del array.
 * 2. Cambia id, name, brand, colors, image, category.
 * 3. Guarda el archivo y sube a GitHub.
 *
 * image: usa una URL de imagen pública (puedes subir fotos a imgur, cloudinary, o a una carpeta /images en el repo).
 * colors: valores posibles → blanco, negro, rojo, azul, verde, beige, rosa, gris, dorado
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Air Max",
    brand: "Nike",
    colors: ["blanco", "dorado"],
    category: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Superstar",
    brand: "Adidas",
    colors: ["negro", "blanco"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Suede",
    brand: "Puma",
    colors: ["rojo"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 4,
    name: "Classic",
    brand: "Reebok",
    colors: ["beige", "blanco"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 5,
    name: "Chuck Taylor",
    brand: "Converse",
    colors: ["negro", "blanco"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 6,
    name: "574",
    brand: "New Balance",
    colors: ["rosa", "gris"],
    category: "Running",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    featured: true
  },
  {
    id: 7,
    name: "Air Force 1",
    brand: "Nike",
    colors: ["blanco"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 8,
    name: "Stan Smith",
    brand: "Adidas",
    colors: ["blanco", "verde"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 9,
    name: "RS-X",
    brand: "Puma",
    colors: ["blanco", "azul"],
    category: "Running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 10,
    name: "Club C",
    brand: "Reebok",
    colors: ["blanco"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 11,
    name: "One Star",
    brand: "Converse",
    colors: ["negro"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    featured: false
  },
  {
    id: 12,
    name: "327",
    brand: "New Balance",
    colors: ["beige", "verde"],
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    featured: false
  }
];

/* Número de WhatsApp (código de país + número, sin + ni espacios) */
const WHATSAPP_NUMBER = "51912345678";
