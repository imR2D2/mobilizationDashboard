const AllInputs = ({ inputs }) => {

    return (
    <>
        <div className="flex flex-wrap justify-center">
            
            {inputs.map((input, index) => (
                <div>
                    
                    <form
                        key={index}
                        className="mt-12"
                    >
                        <div className="space-x-8">
                        <h2>
                            <span className="text-red-500 mr-2 text-2xl">{input.col}</span>
                            {input.label}
                        </h2>
                        <input
                            type={input.type}
                            value={input.value}
                            className={`py-2 px-4 w-${input.width} rounded-md border border-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />
                        </div>
                    </form>
                </div>
            ))}
        </div>
        </>
    );
};

export default AllInputs;
