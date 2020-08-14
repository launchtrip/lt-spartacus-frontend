import React from 'react';
import Head from 'next/head';
import Test from '../components/test';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spartacus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Test />
      </main>
    </div>
  );
}
