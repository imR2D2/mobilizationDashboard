import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Dropdown from "../../components/navigation/Dropdown";

import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";



const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Inicio</title>
        <meta name='description' content='Buy and sell tickets with solidity' />
        <meta name='keywords' content='blocksidian, blockchain' />
        <meta name='robots' content='all' />
        <meta name='author' content='Blocksidian' />
        <meta name='publisher' content='Blocksidian' />
      </Helmet>

      <div>
        <Navbar />
        <Dropdown />
      </div>
    </Layout>
  );
};

export default Home;
