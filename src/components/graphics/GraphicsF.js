import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import Papa from 'papaparse';
import graphics from "../../assets/xlsx/rptMovili.csv";

const GraphicsF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(graphics);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const { data } = Papa.parse(csv, { header: true });

      setData(data.slice(1)); // Excluir la primera fila que contiene los encabezados
      console.log(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Configuración de la gráfica
    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "BINGO",
      },
      xAxis: {
        categories: ["R1", "R2", "R3", "R4", "R5", "R6"],
      },
      yAxis: {
        min: 0,
        max: 1250,
        tickInterval: 250,
        title: {
          text: "",
        },
      },
      series: [
        //Coloco los datos de manera estatica, lo comentado es otro metodo usando los datos del csv
        {
          name: "LNOM",
          data: [200, 350, 500, 750, 900, 1100],
          //data: data.map((row) => parseFloat(row['REGION']))
        },
        {
          name: "META",
          data: [200, 350, 500, 750, 900, 1100],
          //data: data.map((row) => parseFloat(row['META']))
        },
        {
          name: "COMPROMISOS",
          data: [150, 300, 450, 600, 850, 1000],
          //data: data.map((row) => parseFloat(row['COMPROMISOS']))
        },
        {
          name: "AVANCE",
          data: [100, 250, 400, 550, 700, 950],
          //data: data.map((row) => parseFloat(row['AVANCE']))
        },
        {
          name: "SIAN",
          data: [50, 200, 350, 500, 650, 800],
          //data: data.map((row) => parseFloat(row['SIAN']))
        },
        {
          name: "OTROS",
          data: [75, 150, 225, 300, 375, 450],
          //data: data.map((row) => parseFloat(row['OTROS']))
        },
      ],
    };

    // Crear la gráfica
    Highcharts.chart("barChartContainer", options);
  }, [data]);

  return <div className='w-[80vw] sm:w-[45vw]' id="barChartContainer" />;
};

export default GraphicsF;
