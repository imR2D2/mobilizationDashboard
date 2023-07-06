import React from 'react';
import { Helmet } from 'react-helmet-async';

import Dropdown from "../../components/home/Dropdown";

import Navbar from "../../components/home/Navbar";
import Layout from "../../Layout";
import Table from '../../components/table/Table';


const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Inicio</title>
        {/*Metatags*/}
      </Helmet>

      <div>
        <Navbar />
        <Dropdown />
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
