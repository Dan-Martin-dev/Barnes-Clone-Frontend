import { useState, useEffect } from "react";
import type { Product } from '../types/types.tsx';

const useFetchProducts = (): { products: Array<Product>; loading: boolean } => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env["VITE_API_BASE_URL"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/`);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        console.log("Fetched data:", data); // Log data to check structure
        setProducts(data); // If data.products, then use `setProducts(data.products)`
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return { products, loading };
};

export default useFetchProducts;
