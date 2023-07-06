import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from "../../components/home/Navbar"
import Layout from "../../Layout"
import MyModal from "../../components/home/MyModal"
import Dropdawn from "../../components/forms/Dropdawn"
import AllInputs from '../../components/forms/AllInputs';

const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Dashboard | Registro</title>
                {/*Metatags*/}
            </Helmet>
            
            <MyModal />
            <Dropdawn />
            <AllInputs />
            <Navbar />

        </Layout>
    )
}

export default Contacto