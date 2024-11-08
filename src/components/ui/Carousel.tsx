import type { CarouselProps } from "../../types/types.tsx";
import { useState } from "react";


const Carousel: React.FC<CarouselProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalImages = images.length;

	// Function to go to the next image
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const nextImage = () => {
		setCurrentIndex((previousIndex) => (previousIndex + 1) % totalImages);
	};

	// Function to go to the previous image
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const previousImage = () => {
		setCurrentIndex((previousIndex) =>
			previousIndex === 0 ? totalImages - 1 : previousIndex - 1
		);
	};

	return (
		<div className="relative w-full max-w-xl mx-auto">
			{/* Image Container */}
			<div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
				<img
					alt={`Carousel Image ${currentIndex + 1}`}
					className="w-full h-full object-cover"
					src={images[currentIndex]}
				/>

				{/* Overlay with the index */}
				<div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-2 py-1 rounded-md">
					{currentIndex + 1} / {totalImages}
				</div>

				{/* Left Arrow Button */}
				<button
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
					onClick={previousImage}
				>
					&lt;
				</button>

				{/* Right Arrow Button */}
				<button
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
					onClick={nextImage}
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Carousel;
