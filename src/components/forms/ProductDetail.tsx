// components/forms/ProductDetail.tsx
import { useParams } from '@tanstack/react-router'
import useFetchProduct from '../../hooks/useFetchProduct'
import { MdArrowRightAlt } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const ProductDetail = () => {
  // Access the dynamic `id` parameter from the route
  const { id } = useParams({ strict: false })

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
  console.log(product.images);  // Check if the URL is valid
  const imageUrl = product.images?.[0] || '/logo.webp'  // Fallback to a default image if no images

  return (

    /* Product detail component */
    <div className="w-full min-h-max flex flex-col sm:flex-row sm:space-x-4">

      {/* image section */}
      <div className='w-full sm:w-1/2'>

        {/* counter/arrows */}
        <div className='flex justify-between mx-4 text-lg text-gray-500'>
          <p>1/4</p>

          <div className='flex '>
            <MdArrowRightAlt className="transform rotate-180 text-gray-400" size={27} />
            <MdArrowRightAlt className="text-gray-400 mx-2" size={27} />
          </div>
        </div>

        {/* carousel */}
        <div className="relative m-4">
            {/* Red Tag */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
              -25% OFF
            </div>
            {/* image */}
            <img alt="img" src={imageUrl}/>
        </div>
      </div>

      {/* description section */}
      <div className="w-full mt-2 sm:w-1/2 ">

        {/* links */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {/* Link 1 */}
          <a className="hover:text-gray-600" href="#">Inicio</a>
          
          {/* Divider */}
          <span className="text-gray-400">|</span>
          
          {/* Link 2 */}
          <a className="hover:text-gray-600" href="#">NEW COLLECTION</a>
          
          {/* Divider */}
          <span className="text-gray-400">|</span>
          
          {/* Link 3 */}
          <a className="hover:text-gray-600" href="#">Signature Summer Shirt</a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
