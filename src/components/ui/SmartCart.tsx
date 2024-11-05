import { useCart } from "../../hooks/CartProvider"; // Adjust path based on actual structure

import { useEffect } from "react";

// SMART CART: Sliding smart cart windows with information about the chosen product to buy
const SmartCart = () => {
	const { isCarritoOpen, toggleCarrito, isMounted } = useCart();

	useEffect(() => {
		if (isMounted) {
			document.body.style.overflow = isCarritoOpen ? "hidden" : "auto";
		}
	}, [isCarritoOpen, isMounted]); // Add dependencies to only re-run effect when these change

	if (!isMounted) {
		return null; // Don't render the cart until the component is mounted
	}

	return (
		<div className="">
			{/* Sliding cart */}
			<div className="w-full h-full">
				{/* Container */}
				<div
					className={`fixed top-0 right-0 bg-white shadow-lg transform ${
						isMounted && isCarritoOpen ? "translate-x-0" : "translate-x-full"
					} transition-transform duration-500 ease-in-out z-10 w-full md:w-1/2 lg:w-1/3`}
				>
					<div className="p-3 w-full">
						{/* Header carrito: carrito de compras */}
						<div className="flex justify-between items-center">
							{/* Titulo */}
							<h2 className="text-center text-sm font-normal text-gray-600 w-full">
								Carrito de compras
							</h2>

							{/* Close: x button */}
							<button
								className="text-2xl font-medium text-gray-600"
								onClick={toggleCarrito}
							>
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 18L18 6M6 6l12 12"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
									/>
								</svg>
							</button>
						</div>

						<hr className="w-full font-thin border-gray-500 mt-2" />

						{/* Imagen and Info Container */}
						<div className="flex items-center space-x-4 mb-4 p-2">
							{/* Mini Image */}
							<div>
								<img
									alt="Product Image"
									className="object-cover rounded border border-gray-300"
									height={80} // Height of the mini image
									src="/green_hoodie.jpg" // Replace with your image path
									width={80} // Width of the mini image
								/>
							</div>

							{/* Informacion del carrito */}
							<div className="flex-1 text-gray-600">
								{/* Text */}
								<div className="flex justify-between items-center mb-2">
									<h3 className="text-sm font-normal text-gray-600">
										Hoodie Automobile Club Vintage Blue
									</h3>
									<button className="text-xs font-normal text-gray-600 underline">
										Borrar
									</button>
								</div>

								<p className="text-sm text-gray-500">(talle 1)</p>

								{/* Price and Quantity */}
								<div className="flex justify-between items-center mt-2">
									<p className="text-sm font-bold text-gray-700">$175.000,00</p>
									<div className="flex items-center space-x-2">
										{/* Plus and minus counter buttons */}
										<div className="flex border border-gray-300 rounded">
											<button className="text-gray-500 border-r border-gray-300 px-3 py-1">
												-
											</button>
											<span className="text-gray-500 px-3 py-1">1</span>
											<button className="text-gray-500 border-l border-gray-300 px-3 py-1">
												+
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Subtotal */}
						<div className="mt-4">
							<p className="text-gray-600">
								Subtotal (sin envío):{" "}
								<span className="font-bold text-gray-800">$149.000,00</span>
							</p>
						</div>

						{/* Delivery Information */}
						<div className="mt-4">
							<p className="text-gray-600">
								Entregas para el CP:{" "}
								<span className="text-blue-500 cursor-pointer">Cambiar CP</span>
							</p>
							<p className="text-blue-500 cursor-pointer">
								No sé mi código postal
							</p>
						</div>

						{/* Shipping Methods */}
						<div className="mt-4">
							<h4 className="font-semibold text-gray-700">Medios de envío</h4>
							<button className="mt-2 text-blue-500">Calcular</button>
							<div className="mt-2 text-gray-600">
								<p>Nuestro local</p>
								<p>Punto de retiro Recoleta - Marcelo T de Alvear 1261</p>
								<p>Horario y Día de entrega a coordinar</p>
								<p className="font-bold text-gray-800">Gratis</p>
							</div>
						</div>

						{/* Total */}
						<div className="mt-6 flex justify-between items-center">
							<p className="text-lg font-normal text-gray-600">Total:</p>
							<div className="text-right">
								<p className="text-lg font-normal text-gray-600">$149.000,00</p>
								<p className="text-sm text-gray-600">
									O hasta 6 x $24.833,33 sin interés
								</p>
							</div>
						</div>

						{/* Buttons */}
						<button className="w-full bg-black text-sm text-white py-3 mt-4">
							Iniciar compra
						</button>

						<button className="w-full text-gray-700 mt-4">
							Ver más productos
						</button>
					</div>
				</div>

				{/* Overlay when cart is open */}
				{isCarritoOpen && (
					<div
						className="fixed inset-0 bg-black opacity-50 z-5"
						onClick={toggleCarrito}
					></div>
				)}
			</div>
		</div>
	);
};

export default SmartCart;
