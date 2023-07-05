import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from "../../components/home/Navbar"
import Layout from "../../hocs/layouts/Layout"
import MyModal from "../../components/home/MyModal"

const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Dashboard | Registro</title>
                {/*Metatags*/}
            </Helmet>
            <MyModal />
            <Navbar />

        </Layout>
    )
}

export default Contacto