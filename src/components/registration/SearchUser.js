import React, { useState, useEffect } from 'react';
import dataUsers from '../../data/dataUsers'

const SearchUser = () => {
    // Hooks useState
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedSeccion, setSelectedSeccion] = useState("");
    const [selectedEstado, setSelectedEstado] = useState("");

    // Llenar el setUsers con nuestros datos de archivo dataUsers.js
    const dataShow = () => {
        setUsers(dataUsers);
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
            <div className='w-[90vw]'>
                <h1 className='text-center'>Busqueda de Responsable</h1>

                <h2>Responsable</h2>
                {/* Onchange porque el ingreso de usuarios cambia al ingresar caracteres */}
                <input
                    value={search}
                    onChange={searcher}
                    type="text"
                    placeholder="Ingresa el nombre"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />

                <h2>Secciones</h2>
                {/* Select de secciones de usuarios */}
                <select
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

                <h2>Estados</h2>
                {/* Select de estados de usuarios */}
                <select
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

                {/* Crear vista y traer datos de nuestro set */}
                {filteredResults.map((user) => (
                    <div className='inline-block mx-10 mt-10' key={user.id}>
                        <h2>{user.nombre} {user.apellidoPaterno}</h2>
                        <h2>{user.responsabilidad}</h2>
                        <h2>{user.nacimiento.estado}</h2>
                        <h2>{user.seccion}</h2>
                        <br />
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <button
                    onClick={clean}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                    LIMPIAR
                </button>
            </div>

        </>
    );
};

export default SearchUser;
