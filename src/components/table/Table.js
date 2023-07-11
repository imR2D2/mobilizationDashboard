import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import csv from "../../assets/xlsx/rptMovili.csv"

import graphics from "../../assets/xlsx/rptMovili.csv";
import { FaFileExcel } from "react-icons/fa";

const Table = () => {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(5);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(graphics);
			const reader = response.body.getReader();
			const result = await reader.read();
			const decoder = new TextDecoder("utf-8");
			const csv = decoder.decode(result.value);
			const { data } = Papa.parse(csv, { header: true });

			setData(data.slice(1)); // Excluir la primera fila que contiene los encabezados
		};

		fetchData();
	}, []);

	const handlePerPageChange = (e) => {
		setPerPage(parseInt(e.target.value));
		setCurrentPage(1); // Resetear la página actual al cambiar el número de filas por página
	};

	const indexOfLastRecord = currentPage * perPage;
	const indexOfFirstRecord = indexOfLastRecord - perPage;
	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} //Pagina anterior, funcion para retroceder
	};

	const handleNextPage = () => {
		const totalPages = Math.ceil(data.length / perPage);
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		} //Pagina siguiente, funcion para avanzar
	};

	return (
		<div className="my-20">	

			<a download='CSV' href={csv}>
				<button type="button" className="hidden sm:flex ml-10 mt-30 mb-6 w-36 px-4 py-2 mt-4 text-white bg-bluee-200 rounded-md hover:bg-blue-950">
				<FaFileExcel className="mr-2" size={24} color="white" />
					EXPORTAR
				</button>
            </a>

			<div className="flex justify-center space-x-6 my-4 sm:hidden">
				<p className="mt-2">
					{currentPage} de {Math.ceil(data.length / perPage)}
				</p>

				<select
					value={perPage}
					onChange={handlePerPageChange}
					className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				>
					<option value={5}>5 rows</option>
					<option value={10}>10 rows</option>
					<option value={20}>15 rows</option>
				</select>
			</div>

			{/*Primera fila de la tabla */}
			<div className="overflow-auto rounded-lg shadow">
				<table className="text-sm w-[100vw] border-collapse">
					<thead>
						<tr>
							<th className="px-2 py-2 border">DF</th>
							<th className="px-2 py-2 border">DL</th>
							<th className="px-2 py-2 border">REGIÓN</th>
							<th className="px-2 py-2 border">MUNICIPIO</th>
							<th className="px-2 py-2 border">POLÍGONO</th>
							<th className="px-2 py-2 border">SECCIÓN</th>
							<th className="px-2 py-2 border">LNOM</th>
							<th className="px-2 py-2 border">META</th>
							<th className="px-2 py-2 border">COMPROMISOS</th>
							<th className="px-2 py-2 border">AVANCE</th>
							<th className="px-2 py-2 border">DETECTADOS</th>
							<th className="px-2 py-2 border">OTROS</th>
							<th className="px-2 py-2 border">PORCENTAJE</th>
							<th className="px-2 py-2 border">EFECTIVIDAD</th>
						</tr>
					</thead>

					{/*Llenado automatico de las filas desde archivo csv */}
					<tbody className="text-center">
						{currentRecords.map((row, index) => (
							<tr key={index}>
								<td className="px-2 py-2 border">{row["DISTRITO FEDERAL"]}</td>
								<td className="px-2 py-2 border">{row["DISTRITO LOCAL"]}</td>
								<td className="px-2 py-2 border">{row["REGIÓN"]}</td>
								<td className="px-2 py-2 border">
									{row["MUNICIPIO"].charAt(0).toUpperCase() +
										row["MUNICIPIO"].slice(1).toLowerCase()}
								</td>
								<td className="px-2 py-2 border">{row["POLÍGONO"]}</td>
								<td className="px-2 py-2 border">{row["SECCIÓN"]}</td>
								<td className="px-2 py-2 border">{row["LNOM"]}</td>
								<td className="px-2 py-2 border">{row["META"]}</td>
								<td className="px-2 py-2 border">{row["COMPROMISOS"]}</td>
								<td className="px-2 py-2 border">{row["AVANCE"]}</td>
								<td className="px-2 py-2 border">{parseFloat(row["DETECTADOS"]).toFixed(2)}</td>
								<td className="px-2 py-2 border">{row["OTROS"]}</td>
								<td className="px-2 py-2 border text-red-600">
									{parseFloat(row["PORCENTAJE"]).toFixed(2)}
								</td>
								<td className="px-2 py-2 border text-red-600">
									{parseFloat(row["EFECTIVIDAD"]).toFixed(2)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/*Botones de navegacion entre pestanas de informacion */}
			<div className="space-x-4 flex justify-between mx-10">
				<button
					className="block w-72 px-4 py-2 mt-6 text-white bg-bluee-200 rounded-md hover:bg-blue-950"
					onClick={handlePreviousPage}
				>
					ANTERIOR
				</button>

				<button className="block sm:hidden h-10 mt-6 w-36 px-4 py-2 text-white bg-bluee-200 rounded-md hover:bg-blue-950">
					<FaFileExcel size={20} color="white" />
				</button>

				{/*Campos en parte de abajo de la tabla en pantallas grandes */}
				<div className="flex-col mt-2 hidden sm:block ">
					{/*Calculo para sacar el numero de paginas */}
					<p className="ml-4">
						{currentPage} de {Math.ceil(data.length / perPage)}
					</p>

					{/*Select para mostrar el numero de campos necesario dentro de la pagina */}
					<select
						value={perPage}
						onChange={handlePerPageChange}
						className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					>
						<option value={5}>5 rows</option>
						<option value={10}>10 rows</option>
						<option value={20}>15 rows</option>
					</select>
				</div>

				<button
					className="block w-72 px-4 py-2 mt-6 text-white bg-bluee-200 rounded-md hover:bg-blue-950"
					onClick={handleNextPage}
				>
					SIGUIENTE
				</button>
			</div>
		</div>
	);
};

export default Table;
