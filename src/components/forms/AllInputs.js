const AllInputs = () => {
    
    return (
        <>
            <form className="mt-10 flex justify-center flex-col-4 space-x-6">
                <div>
                    <h2>Clave elector</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[20vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Nombre(s)</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[20vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            
                <div>
                    <h2>Apellido paterno</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[20vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <h2>Apellido materno</h2>
                    <input
                        type="text"
                        value=""
                        className=" px-4 w-[20vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </form>

            <form className="mt-8 flex justify-center flex-col-3 space-x-16">
                <div>
                    <h2>Fecha de nacimiento</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <h2>Sexo</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <h2>Estado de nacimiento</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </form>

            <h2 className="my-8 text-center font-bold text-blue-950">Domicilio donde vive</h2>
            <form className="mt-8 flex justify-center flex-col-3 space-x-6">
                <div>
                    <h2>Calle</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Núm Ext.</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[15vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Núm Int.</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[15vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Municipio vivo</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </form>

            <form className="mt-8 flex justify-center flex-col-3 space-x-6">
                <div>
                    <h2>Localidad</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[15vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Colonia</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[15vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>CP</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <h2>Sección</h2>
                    <input
                        type="text"
                        value=""
                        className="py-2 px-4 w-[25vw] rounded-md border border-grayy-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </form>
            
        </>
    )
} 

export default AllInputs