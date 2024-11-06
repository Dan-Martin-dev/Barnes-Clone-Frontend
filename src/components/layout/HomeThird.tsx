import Products from '../../components/layout/Products.tsx'

const HeroThird = () => {
	return (
		<div className="h-screen md:grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 p-4">
			{/* NUEVOS INGRESOS */}
			<div className="col-span-1 row-span-1 md:row-span-2 ">
				<h1 className="text-4xl md:text-4xl md:p-2 lg:text-6xl lg:p-5 font-normal text-gray-500 ">
					NUEVOS INGRESOS
				</h1>
			</div>

			{/* Grid Items */}
			<div className="col-span-1 md:col-span-3 grid md:grid-cols-3 lg:grid-cols-3 gap-4">
				<Products />
			</div>
		</div>
	);
};

export default HeroThird;
