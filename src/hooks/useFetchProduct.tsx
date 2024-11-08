import { useState, useEffect } from "react";
import type { Product } from "../types/types";

const useFetchProduct = (
  id: string | undefined 
): { product: Product | null; loading: boolean } => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const apiUrl = import.meta.env["VITE_API_BASE_URL"];

  useEffect(() => {
    if (!id) return;
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json()
        setProduct(data as Product);  // Assuming `data` is of type `Product`
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    void fetchProduct();
  }, [id, apiUrl]);

  return { product, loading };
};

export default useFetchProduct;
