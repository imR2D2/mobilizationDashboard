import React from 'react';
import { Helmet } from 'react-helmet-async';

import Dropdown from "../../components/navigation/Dropdown";

import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Table from '../../components/navigation/Table';
import Modal from "../../components/navigation/Modal"

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
        <Modal />
      </div>
    </Layout>
  );
};

export default Home;
