import React, { useState } from 'react';
import SegmentNot from './segmentNot';
import ShowSegments from './ShowSegments'

const Example = () => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange = event => {
    setChecked(event.target.value === 'no');
  };

  return (
    <div className='mb-20 w-full'>
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-blue-950'>Segmento</h2>
            <button className='mt-4 bg-blue-950 text-white px-4 py-2 rounded-lg'>MAPACHE</button>
            <h2 className='mt-4 font-bold text-blue-950'>¿La dirección de la Credencial de Elector y donde vive son las mismas?</h2>
        </div>

        <div className='space-x-4 flex justify-center mt-6 mb-12'>
            <label>
                <input
                type="radio"
                name="toggle"
                value="yes"
                checked={!checked}
                onChange={handleRadioChange}
                />
                Sí
            </label>
            <label>
                <input
                type="radio"
                name="toggle"
                value="no"
                checked={checked}
                onChange={handleRadioChange}
                />
                No
            </label>
        </div>
        
        {checked && <ShowSegments /> }

        <div className='space-x-4 flex justify-center'>
            <button className='bg-red-700 text-white px-6 py-2 rounded-lg'>LIMPIAR</button>
            <button className='bg-blue-950 text-white px-6 py-2 rounded-lg'>GUARDAR</button>
        </div>
    </div>
    );
};

export default Example;