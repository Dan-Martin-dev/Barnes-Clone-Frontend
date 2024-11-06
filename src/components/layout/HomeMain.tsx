import { useState } from "react";
import useImageSize from "/home/vare/project/microservices_1/ecommerce_1/Barnes-Clone-Frontend/src/hooks/useImageSize.tsx";
import useCarousel from "/home/vare/project/microservices_1/ecommerce_1/Barnes-Clone-Frontend/src/hooks/useCarousel.tsx";

const images = {
	small: ["/main_smart1.webp", "/main_smart1.webp", "/main_smart1.webp"],
	medium: [
		"/main_slide2.webp",
		"/main_1.webp",
		"/main_slide2.webp",
		"/main_1.webp",
	],
};

const HomeMain: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const imageSize = useImageSize();
	const { currentIndex, handleNext, handlePrevious } = useCarousel(
		images[imageSize],
		5000
	);
	const imageArray = images[imageSize];

	return (
		<div className="relative w-full h-full">
			<div
				className={`relative w-full transition-opacity duration-2000 ${visible ? "opacity-100" : "opacity-0"}`}
			>
				<div>
					<img
						alt=""
						className="w-full h-auto transition-all duration-500 ease-in-out object-cover"
						src={imageArray[currentIndex]}
						onLoad={() => { setVisible(true); }}
						onError={() =>
							{ console.error("Failed to load image:", imageArray[currentIndex]); }
						}
					/>
				</div>
				<div className="absolute top-4 right-4 flex space-x-4">
					<button
						className="w-8 h-8 text-white text-4xl flex items-center justify-center transition"
						onClick={handlePrevious}
					>
						&#8249;
					</button>
					<button
						className="w-8 h-8 text-white text-4xl flex items-center justify-center transition"
						onClick={handleNext}
					>
						&#8250;
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeMain;
