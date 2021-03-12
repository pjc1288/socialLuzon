import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image'
import {colors, Title2} from '../styles/globalStyles'
import {APP_NAME} from '../config'
import Navbar from '../components/Navbar/Navbar';





export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        
        
      </Head>
        <Title2>{APP_NAME}</Title2>

    </>
  );
}
