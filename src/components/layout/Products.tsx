import { Link } from '@tanstack/react-router';
import ProductCard from '../../components/forms/ProductCard.tsx'
import useFetchProducts from "../../hooks/useFetchProducts.tsx";
import type { Product } from '../../types/types.tsx';

const Products: React.FC = () => {
	const {products, loading } = useFetchProducts();
	if (loading) return <p>Loading...</p>;
	console.log("Products data:", products); // Check what products contains

	return (
		<>
			{products.map(
				(
					product: Product,
					/* index: number // Specify product type here */
				) => (
/* 					<Link
						key={product.id}
						className={`${index === 0 ? "" : "hidden md:block"}`} // Show first product on all screens, hide others on small screens
						to={`/products/${product.id}`}
					> */
						<ProductCard {...product} />
					/* </Link> */
				)
			)}
		</>
	);
};

export default Products;
