import { useState } from 'react';
import type { Product } from '../../types/types.tsx'; // Adjust the path to your types file
import { Link } from '@tanstack/react-router';

const ProductCard: React.FC<Product> = ({ id, title, price, beforePrice, share, images }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-full mt-4 min-h-max">
      <div 
        className="relative overflow-hidden bg-white shadow-lg"
        onMouseEnter={() => { setHover(true)} }
        onMouseLeave={() => { setHover(false)} }
      >
        {/* Red Tag */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
          -25% OFF
        </div>

        {/* Product Image */}
        <div className="w-full max-h-full h-[500px] sm:h-[900px] md:h-[300px] lg:h-[500px] overflow-hidden relative">
          <img
            alt={title}
            className={`transform transition-transform duration-500 ease-in-out ${hover ? 'scale-110' : 'scale-100'} w-full h-full object-cover`}
            src={hover ? images[0] : images[1] || images[0]} // Displays alternate image on hover if available
          />
        </div>
      </div>

      {/* Product Info */}
      <div key={id} className="mt-3">
        <h2 className="text-md font-semibold text-gray-600">{title}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-md font-normal text-gray-500">${price}</span>
          {beforePrice && (
            <span className="text-xs text-gray-400 line-through">${beforePrice}</span>
          )}
        </div>
        <p className="text-xs text-gray-500">{share}</p>

        {/* Link to product detail page */}
        <Link
          className="mt-2 w-full text-gray-500 text-sm font-normal py-2 text-left underline"
          to={`/product/${id}`}
        >
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
