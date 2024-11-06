import { useEffect, useState } from "react";

const images = {
	small: ["/main_smart1.webp", "/main_smart1.webp", "/main_smart1.webp"],
	medium: [
		"/main_slide2.webp",
		"/main_1.webp",
		"/main_slide2.webp",
		"/main_1.webp",
	],
};

/* Carrousel for sliding images */
const HomeMain: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageSize, setImageSize] = useState<"small" | "medium">("small");

	/* Resize sm and md */
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setImageSize("medium");
			} else {
				setImageSize("small");
			}
		};
	
		if (typeof window !== "undefined") {
			handleResize(); // Set initial image size
			window.addEventListener("resize", handleResize);
	
			// Cleanup function to remove event listener
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	
		// Ensure there's a return value in all paths
		return undefined;
	}, []);
	
	/* 5s to slide image */
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((previousIndex) => {
				const imagesArray = images[imageSize];
				return (previousIndex + 1) % imagesArray.length;
			});
		}, 5000);	

		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		return () => {
			clearInterval(intervalId);
		};
	}, [imageSize]);

	/* Next img */
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleNext = () => {
		setCurrentIndex((previousIndex) => {
			const imagesArray = images[imageSize];
			return (previousIndex + 1) % imagesArray.length;
		});
	};

	/* Prev img */
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handlePrevious = () => {
		setCurrentIndex((previousIndex) => {
			const imagesArray = images[imageSize];
			return (previousIndex - 1 + imagesArray.length) % imagesArray.length;
		});
	};

	const imageArray = images[imageSize];

	return (
		<div className="relative w-full h-full">
			<div
				className={`relative w-full transition-opacity duration-2000 ${
					visible ? "opacity-100" : "opacity-0"
				}`}
			>
				{/* Overlay to hide content before image loads */}
				<div>
					<img
						alt=""
						className="w-full h-auto transition-all duration-500 ease-in-out object-cover"
						src={imageArray[currentIndex]}
						onError={() => {
							console.error("Failed to load image:", imageArray[currentIndex]);
						}}
						onLoad={() => {
							console.log("Image loaded:", imageArray[currentIndex]);
							setVisible(true);
						}}
					/>
				</div>

				{/* Buttons */}
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
