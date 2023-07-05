import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Papa from 'papaparse';
import jijija from "./rptMovili.csv";

const GraphicsF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(jijija);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const { data } = Papa.parse(csv, { header: true });

      setData(data.slice(1)); // Excluir la primera fila que contiene los encabezados
      console.log(data)
    };

    fetchData();
  }, []);

  const createChartOptions = () => {

    
    const chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Gráfico de Barras',
      },
      xAxis: {
        categories: data.map((row) => row['REGION']),
      },
      yAxis: {
        title: {
          text: 'Valores',
        },
        tickInterval: 250000, // Configura el intervalo de los ticks del eje Y a 250000
      },
      series: [
        {
          name: 'Nombre',
          data: data.map((row) => parseFloat(row['META'])),
        },
      ],
    };

    return chartOptions;
  };

  if (data.length === 0) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h1>Gráfica</h1>
      <HighchartsReact highcharts={Highcharts} options={createChartOptions()} />
    </div>
  );
};

export default GraphicsF;
