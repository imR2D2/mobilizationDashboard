import React, { useState, useEffect } from 'react';
import {users as use} from '../../data/dataUsers'

const SearchUser = () => {
    // Hooks useState
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedSeccion, setSelectedSeccion] = useState("");
    const [selectedEstado, setSelectedEstado] = useState("");

    // Llenar el setUsers con nuestros datos de archivo dataUsers.js
    const dataShow = () => {
        setUsers(use);
    };

    // Renderizamos con useEffect
    useEffect(() => {
        dataShow();
    }, []);

    // Funcion busqueda del contenido del input
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    // Filtrado
    let filteredResults = users;

    if (search) {
        filteredResults = filteredResults.filter((user) => {
        return user.nombre.toLowerCase().includes(search.toLowerCase())
        });
    }

    if (selectedSeccion) {
        filteredResults = filteredResults.filter((user) => {
        return user.seccion === selectedSeccion
        });
    }

    if (selectedEstado) {
        filteredResults = filteredResults.filter((user) => {
        return user.nacimiento.estado === selectedEstado
        });
    }

  //Limpiar campos
    const clean = () => {
        setSearch("")
        setSelectedSeccion("")
        setSelectedEstado("")
    }


    return (
        <>
            <div className='w-[80vw] sm:w-[90vw]'>
                <h1 className='text-center font-bold text-lg mb-8'>Busqueda de Responsable</h1>
                    <div className='block justify-center sm:flex space-x-'>
                        <div>
                            <h2 className='text-sm'>Responsable</h2>
                            {/* Onchange porque el ingreso de usuarios cambia al ingresar caracteres */}
                            <input
                                value={search}
                                onChange={searcher}
                                type="text"
                                placeholder="Ingresa el nombre"
                                className="w-[50vw] sm:w-[25vw] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <h2 className='text-sm'>Secciones</h2>
                            {/* Select de secciones de usuarios */}
                            <select
                                className="w-[50vw] sm:w-[25vw] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={selectedSeccion}
                                onChange={(e) => setSelectedSeccion(e.target.value)}
                            >
                                <option value="">Todas las secciones</option>
                                {filteredResults.map((user) => (
                                <option key={user.id} value={user.seccion}>
                                    {user.seccion}
                                </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <h2 className='text-sm'>Estados</h2>
                            {/* Select de estados de usuarios */}
                            <select
                                className="w-[50vw] sm:w-[25vw] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={selectedEstado}
                                onChange={(e) => setSelectedEstado(e.target.value)}
                            >
                                <option value="">Todos los estados</option>
                                {filteredResults.map((user) => (
                                <option key={user.id} value={user.nacimiento.estado}>
                                    {user.nacimiento.estado}
                                </option>
                                ))}
                            </select>
                        </div>`
                    </div>

                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={clean}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                            LIMPIAR
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-4 justify-center">
                    {/* Crear vista y traer datos de nuestro set */}
                        {filteredResults.map((user) => (
                            <button className='w-[60vw] sm:w-[20vw] h-32 inline-block border-2 space-y-2 border-gray-400 hover:bg-gray-300 hover:scale-105 transition duration-400 rounded-lg p-4 mx-10 mt-10' key={user.id}>
                                <h2 className='uppercase text-blue-800 font-medium text-xs'>Nombre: {user.nombre} {user.apellidoPaterno}</h2>
                                <h2 className='text-xs'>Responsabilidad: {user.responsabilidad}</h2>
                                <h2 className='text-xs'>Estado: {user.nacimiento.estado}</h2>
                                <h2 className='text-xs'>Seccion: {user.seccion}</h2>
                                <br />
                            </button>
                        ))} 
                    </div>
            </div>
        </>
    );
};

export default SearchUser;
