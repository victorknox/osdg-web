import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "flickity/css/flickity.css";


import '../styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
  });
  return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp
