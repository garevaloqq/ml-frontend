import { useQuery } from "react-query";

export const mockDataSearch = {
  author: {
    name: "Geider",
    lastName: "Arevalo Quintana",
  },
  categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
  items: [
    {
      id: "MLA931449399",
      title: "Apple iPhone 11 (128 Gb) - Negro",
      price: {
        currency: "ARS",
        amount: 254999,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg",
      condition: "Nuevo",
      free_shipping: true,
      category_id: "MLA1055",
      city_name: "Palermo",
    },
    {
      id: "MLA931171108",
      title: "Apple iPhone 11 (64 Gb) - (product)red",
      price: {
        currency: "ARS",
        amount: 228999,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_960745-MLA46114990453_052021-I.jpg",
      condition: "Nuevo",
      free_shipping: true,
      category_id: "MLA1055",
      city_name: "Palermo",
    },
    {
      id: "MLA1134247449",
      title: "Apple iPhone SE (3ª Generación, 128 Gb) - Blanco Estelar",
      price: {
        currency: "ARS",
        amount: 213499,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_990308-MLA52140925580_102022-I.jpg",
      condition: "Nuevo",
      free_shipping: true,
      category_id: "MLA1055",
      city_name: "Palermo",
    },
    {
      id: "MLA1109016617",
      title: "Apple iPhone 13 (128 Gb) - Azul Medianoche",
      price: {
        currency: "ARS",
        amount: 354999,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_973345-MLA47781591382_102021-I.jpg",
      condition: "Nuevo",
      free_shipping: true,
      category_id: "MLA1055",
      city_name: "Palermo",
    },
  ],
};

export function useGetProductsHook() {
  return useQuery("getProductsHook", () => mockDataSearch);
}

export function useGetOneProductHook() {
  return useQuery("getOneProductHook", () => mockDataSearch.items[0]);
}
