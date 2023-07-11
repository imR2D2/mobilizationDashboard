import React from 'react';
import { Helmet } from 'react-helmet-async';

import Layout from "../../Layout"
import MyModal from "../../components/registration/MyModal"
import StructureInputs from '../../components/inputs/ShowInputs';
import SegmentYes from '../../components/segment/segmentYes';

const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Dashboard | Registro</title>
                {/*Metatags*/}
            </Helmet>

            <MyModal />
            <StructureInputs />
            <SegmentYes />
        </Layout>
    )
}

export default Contacto