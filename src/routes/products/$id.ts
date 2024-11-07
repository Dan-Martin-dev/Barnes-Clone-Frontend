import { createFileRoute } from '@tanstack/react-router'
import ProductDetail from '../../components/forms/ProductDetail'

export const Route = createFileRoute('/products/$id')({
  component: ProductDetail, // Render ProductDetail when this route is matched
})