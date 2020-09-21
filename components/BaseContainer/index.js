import React from 'react';
import Head from 'next/head';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import { Provider } from '../../providers/userContext';

export default function BaseContainer(props) {
  return (
    <>
      <Head>
        <title>{`Unify. | ${props.page}`}</title>
        {/* <meta property="og:site_name" content="Unify." />
        <meta property="fb:app_id" content="560462338187989" />
        <meta property="og:title" content="Unify." />
        <meta property="og:site_name" content="Unify." />
        <meta property="og:image" content="https://launchtrip.com/img/lt-logo-fb.png" />
        <meta property="og:updated_time" content="1589479982" />
        <meta property="og:url" content={process.env.BASE_URL} />
        <meta property="og:description" content="Assembley of World Leading Events!" />
        <meta property="og:locale" content="en_us" /> */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />

      </Head>
      <Head>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js" />
      </Head>
      <Provider>
        <NavigationBar page={props.page} />
      </Provider>
      {props.children}
      <Footer />
    </>
  );
}
