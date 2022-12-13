import { useEffect } from 'react';
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {



  return (
  
  <Layout>
   <ScrollToTop/> 
  
  <Component {...pageProps} />
  </Layout>)
}

export default MyApp
