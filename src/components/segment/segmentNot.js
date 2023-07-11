import React from 'react';

const AllInputsTwo = ({ inputs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 p-20 -mt-20">
    <br/>
      {inputs.map((input, index) => (
        <div key={index} className={`${input.gridPosition} mt-4`}>
          <h2 className={`text-${input.titleColor} font-bold -ml-20`}>{input.title}</h2>
          <form>
            <div className="space-x-8">
              <h2>
                <span className="text-red-500 mr-2 text-2xl">{input.col}</span>
                {input.label}
              </h2>
              <input
                type={input.type}
                value={input.value}
                className={`py-2 px-4 w-full sm:w-auto rounded-md border border-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AllInputsTwo;
