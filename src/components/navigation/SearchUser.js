import React, { useState, useEffect } from 'react';
import dataUsers from '../../data/dataUsers'

const SearchUser = () => {
    //Hooks useState
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    //Llenar el setUsers con valores de constante Hola
    const dataShow = async () => {
        setUsers(dataUsers);
    };

    //Renderizamos con useEffect
    useEffect(() => {
        dataShow();
    }, []);


    //Funcion busqueda de input
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //Filtrado
    //Condicional para mostrar users si el usuario no coloca nada
    let results = []
    if(!search){
        results = users
    }else{
        //Si el usuario si coloca
        results = users.filter((hola) => {
            //Lo que quieres filtrar para pasar todo a minusculas
            return hola.nombre.toLowerCase().includes(search.toLowerCase())
        })
    }

    //const results = !search ? users : users.filter((hola) => hola.nombre.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='my-20 mx-auto w-full'>
            {/*Onchange porque el ingreso de usuarios cambia al ingresar caracteres */}
            <input value={search} onChange={searcher}  type='text' placeholder='Hola'></input>

            {results.map((user) => {
                return (
                    <h1 key={user.id}>
                        <h2>{user.nombre}</h2>
                        <h2>{user.apellidoPa}</h2>
                    </h1>
                );
            })}

        </div>
    );
};

export default SearchUser;
