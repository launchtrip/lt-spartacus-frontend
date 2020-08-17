/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/ant.css';
import '../styles/button.css';
import '../styles/typography.css';
import '../styles/container.css';
import '../styles/carousel.css';
import 'react-multi-carousel/lib/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
