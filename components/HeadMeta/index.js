import React from 'react';
import Head from 'next/head';

export default function HeadMeta() {
  return (
    <Head>
      <meta property="og:site_name" content="Unify." />
      <meta property="fb:app_id" content="560462338187989" />
      <meta property="og:title" content="Unify." />
      <meta property="og:site_name" content="Unify." />
      <meta property="og:image" content="/assets/logo.png" />
      <meta property="og:updated_time" content="1589479982" />
      <meta property="og:url" content={process.env.BASE_URL} />
      <meta property="og:description" content="Assembley of World Leading Events!" />
      <meta property="og:locale" content="en_us" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
