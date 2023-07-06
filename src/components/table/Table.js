import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import graphics from "../../assets/xlsx/rptMovili.csv";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(graphics);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
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
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(data.length / perPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='my-20'>
      <button className='ml-10 mt-30 w-36 px-4 py-2 mt-4 text-white bg-bluee-200 rounded-md hover:bg-blue-950'>
        EXPORTAR
      </button>
      <div className='overflow-auto rounded-lg shadow'>
      <table className="text-sm w-[60vw] border-collapse">
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
          <tbody className='text-center'>
            {currentRecords.map((row, index) => (
              <tr key={index}>
                <td className="px-2 py-2 border">{row['DISTRITO FEDERAL']}</td>
                <td className="px-2 py-2 border">{row['DISTRITO LOCAL']}</td>
                <td className="px-2 py-2 border">{row['REGIÓN']}</td>
                <td className="px-2 py-2 border">
                  {row['MUNICIPIO'].charAt(0).toUpperCase() + row['MUNICIPIO'].slice(1).toLowerCase()}
                </td>
                <td className="px-2 py-2 border">{row['POLÍGONO']}</td>
                <td className="px-2 py-2 border">{row['SECCIÓN']}</td>
                <td className="px-2 py-2 border">{row['LNOM']}</td>
                <td className="px-2 py-2 border">{row['META']}</td>
                <td className="px-2 py-2 border">{row['COMPROMISOS']}</td>
                <td className="px-2 py-2 border">{row['AVANCE']}</td>
                <td className="px-2 py-2 border">{row['DETECTADOS']}</td>
                <td className="px-2 py-2 border">{row['OTROS']}</td>
                <td className="px-2 py-2 border text-red-600">{row['PORCENTAJE']}</td>
                <td className="px-2 py-2 border text-red-600">{row['EFECTIVIDAD']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-between mx-10'>
        <button
          className='mt-50 block w-72 px-4 py-2 mt-4 text-white bg-bluee-200 rounded-md hover:bg-blue-950'
          onClick={handlePreviousPage}
        >
          ANTERIOR
        </button>

        <p className='mt-4'>
          {currentPage} de {Math.ceil(data.length / perPage)}
        </p>
        <select
          value={perPage}
          onChange={handlePerPageChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={15}>15 rows</option>
        </select>
        
        <h2></h2>


        <button
          className='mt-50 block w-72 px-4 py-2 mt-4 text-white bg-bluee-200 rounded-md hover:bg-blue-950'
          onClick={handleNextPage}
        >
          SIGUIENTE
        </button>
      </div>
    </div>
  );
};

export default Table;
