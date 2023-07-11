import React, { useState } from "react";
import GraphicsF from "../graphics/GraphicsF";
import GraphicsL from "../graphics/GraphicsL";
import BothGraphics from "../graphics/BothGraphics";

const HeroSection = () => {
	const [selectedOption, setSelectedOption] = useState("estatal");
	const [showComponent, setShowComponent] = useState(false);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		setShowComponent(false); // Reiniciamos el estado showComponent al cambiar la opción
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowComponent(true);
	};

	return (
		<div className="mt-20 relative">
			<form onSubmit={handleSubmit} className="max-w-xs mx-auto">
				<div className="relative">
					<label htmlFor="lang" className="text-gray-700">
						Vistas:
					</label>
					<select
						name="lenguajes"
						id="lang"
						className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
						value={selectedOption}
						onChange={handleOptionChange}
					>
						<option value="estatal">Estatal</option>
						<option value="distritoLocal">Distrito Local</option>
						<option value="distritoFederal">Distrito Federal</option>
					</select>
				</div>
				<input
					type="submit"
					value="Mostrar"
					className="block w-full px-4 py-2 mt-4 text-white bg-bluee-200 rounded-md hover:bg-blue-700"
				/>
			</form>
			{(showComponent || selectedOption === "estatal") && (
				<div className="mt-4">
					{selectedOption === "estatal" && <BothGraphics />}
					{selectedOption === "distritoLocal" && <BothGraphics />}
					{selectedOption === "distritoFederal" && <GraphicsF />}
				</div>
			)}
		</div>
	);
};

// Ejemplo de componente para mostrar en función de la opción seleccionada


export default HeroSection;
