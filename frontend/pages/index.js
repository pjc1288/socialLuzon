import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image'
import {colors} from '../styles/globalStyles'



const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: ${colors.secondary};
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero>
        <Heading>Social Luzón</Heading>
      </Hero>
    </>
  );
}
