import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GraphicsTimeline = () => {

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Línea de Tiempo Movilización Acumulada',
    },
    xAxis: {
      categories: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    },
    yAxis: {
      min: 0,
      max: 80000,
      tickInterval: 20000,
      title: {
        text: '',
      },
    },
    series: [{
      data: [200, 350, 500, 750, 900, 1100],
    },
    {
      data: [20000, 35000, 50000, 75000, 90000, 11000],
    },
    {
      data: [15000, 30000, 45000, 6000, 8050, 10000],
    },
    {
      
      data: [1000, 20050, 40000, 50050, 7000, 90050],
    },
    {
      data: [5000, 20000, 3050, 50000, 60050, 80000],
    },
    {
      data: [7005, 15000, 22500, 30000, 30075, 45000],
    }],
  };

  return (
    <div className='w-[80vw] sm:w-[45vw]'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GraphicsTimeline;
