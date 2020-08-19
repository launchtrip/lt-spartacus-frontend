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

      </Head>
      <NavigationBar page={props.page} />
      {props.children}
      <Footer />
    </>
  );
}
