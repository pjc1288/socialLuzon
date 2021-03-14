import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import {colors, Title2} from '../styles/globalStyles'
import {APP_NAME} from '../config'
import Navbar from '../components/Navbar/Navbar';
import InfoSection from '../components/infoSection/InfoSection';





export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        
        
      </Head>
      <>
      <InfoSection />

    </>

    </>
  );
}
