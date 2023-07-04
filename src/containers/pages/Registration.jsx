import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import Filter from "../../components/navigation/SearchUser"

const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Dashboard | Registro</title>
                 {/*Metatags*/}
            </Helmet>
            <Filter />
            <Navbar />

        </Layout>
    )
}

export default Contacto