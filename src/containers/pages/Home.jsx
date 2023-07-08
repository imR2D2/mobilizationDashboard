import React from 'react';
import { Helmet } from 'react-helmet-async';

import Dropdown from "../../components/dropdowns/Dropdown";

import Layout from "../../Layout";
import Table from '../../components/table/Table';


const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Inicio</title>
        {/*Metatags*/}
      </Helmet>

      <Dropdown />
      <Table />
      
    </Layout>
  );
};

export default Home;
