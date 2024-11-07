import ProductCard from "../../components/forms/ProductCard.tsx";
import useFetchProducts from "../../hooks/useFetchProducts.tsx";
import type { Product } from "../../types/types.tsx";
import { Link } from "@tanstack/react-router";

const Products: React.FC = () => {
	const { products, loading } = useFetchProducts();
	if (loading) return <p>Loading...</p>;
	console.log("Products data:", products); // Check what products contains

	return (
		<>
			{products.map((product: Product, index: number ) => (
				<Link
					key={product.id} // Ensure key is unique and assigned to Link
					className={`${index === 0 ? "" : "hidden md:block"}`}
					to={`/products/${product.id}`}
				>
					<ProductCard {...product} />
				</Link>
			))}
		</>
	);
};

export default Products;
