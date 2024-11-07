// components/forms/ProductDetail.tsx
import { useParams } from '@tanstack/react-router'
import useFetchProduct from '../../hooks/useFetchProduct'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const ProductDetail = () => {
  // Access the dynamic `id` parameter from the route
  const { id } = useParams({ strict: false })
  console.log("ProductDetail - Retrieved ID:", id);

  // Use the custom hook to fetch product data
  const { product, loading } = useFetchProduct(id)

  if (!id) {
    console.error('Product ID is missing!');
  }
   if (id) {
    console.error('Product ID is good!!');
  }
  if (loading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.title}</p>
      {/* Render other product details here */}
    </div>
  )
}

export default ProductDetail
