import React from 'react';
import Head from 'next/head';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

export default function BaseContainer(props) {
  return (
    <>
      <Head>
        <title>{`Unify. | ${props.page}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />
        <script type="text/javascript" src="js/jquery.min.js" />
        <script type="text/javascript" src="js/popper.min.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="js/mdb.min.js" />
        <script src="./js/addons/datatables.min.js" />
      </Head>
      <Head>
        {/* <script type="text/javascript" src="js/jquery.min.js" /> */}
        {/* <script type="text/javascript" src="js/popper.min.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="js/mdb.min.js" />
        <script src="./js/addons/datatables.min.js" /> */}
      </Head>
      <NavigationBar page={props.page} />
      {props.children}
      <Footer />
    </>
  );
}
