import { useParams } from "@tanstack/react-router";
import useFetchProduct from "../../hooks/useFetchProduct";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = useFetchProduct(id);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img alt={product.title} src={product.image} />
    </div>
  );
};

export default ProductDetail;
