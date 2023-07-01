import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"


const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Dashboard | Registro</title>
                <meta name='description' content='Buy and sell tickets with solidity' />
                <meta name='keywords' content='blocksidian, blockchain' />
                <meta name='robots' content="all" />
                <meta name='author' content='Blocksidian' />
                <meta name='publisher' content='Blocksidian' />
            </Helmet>
            <Navbar />
        </Layout>
    )
}

export default Contacto