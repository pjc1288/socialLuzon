import React from 'react';
import Image from 'next/image'

import { Container, Button, Buttons, Title2, Line, Paragraph } from '../../styles/globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Wave
} from './InfoSection.elements';

function InfoSection() {
  return (
    <>
    <Wave>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
    style={{
        position: "relative",
        display: "block",
        width: "calc(100% + 1.3px)",
        height: "120px",

      }}>
        <path style={{fill: "white"}} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
    </Wave>
  
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine>Te damos la bienvenida a</TopLine>
                <Heading lightText>Social Luzón</Heading>
                <Subtitle lightTextDesc>Plataforma perteneciente a la Fundación Luzón orientada a la difusión de contenido y realización de retos dentro de el social media.</Subtitle>
                  <Buttons outlineGrey big>
                        Colabora con Nosotros
                  </Buttons>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
      
            <ImgWrapper style={{ width: '500px', height: '500px' }}>
            <Image
              alt="luzonHome"
              src="/home-1.png"
              layout="fill"
              objectFit="cover"
              />
             </ImgWrapper>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

      <InfoSec lightBg>
        <Container>
          <InfoRow imgStart>
            <InfoColumn>
              <TextWrapper>
                <Title2>Dona Difusión</Title2>
                <Line></Line>
                <Paragraph >We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</Paragraph>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
      
            <ImgWrapper style={{ width: '545px', height: '364px' }}>
            <Image
              alt="luzonHome"
              src="/home2.png"
              layout="fill"
              objectFit="cover"
              />
             </ImgWrapper>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <div style={{
              position: "absolute",
              top: 1400,
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
              transform: "rotate(180deg)"
      }}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
    style={{        position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "120px",}}>
        <path style={{fill: "white"}} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>



      <Wave>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
    style={{
        position: "relative",
        display: "block",
        width: "calc(100% + 1.3px)",
        height: "120px",

      }}>
        <path style={{fill: "white"}} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
    </Wave>

    
    <Wave>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
    style={{
        position: "relative",
        display: "block",
        width: "calc(100% + 1.3px)",
        height: "120px",

      }}>
        <path style={{fill: "white"}} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
    </Wave>
  
      <InfoSec>
        <Container>
          <InfoRow>
            
              <TextWrapper>
                <TopLine lightTopLine>Te damos la bienvenida a</TopLine>
                <Heading lightText>Social Luzón</Heading>
                <Subtitle lightTextDesc>Plataforma perteneciente a la Fundación Luzón orientada a la difusión de contenido y realización de retos dentro de el social media.</Subtitle>
                  <Buttons outlineGrey big>
                        Colabora con Nosotros
                  </Buttons>
              </TextWrapper>
      
            <InfoColumn>
      
            <ImgWrapper style={{ width: '500px', height: '500px' }}>
            <Image
              alt="luzonHome"
              src="/home-1.png"
              layout="fill"
              objectFit="cover"
              />
             </ImgWrapper>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      

      <InfoSec lightBg>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Title2>Dona Difusión</Title2>
                <Line></Line>
                <Paragraph >We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</Paragraph>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
      
            <ImgWrapper style={{ width: '545px', height: '364px' }}>
            <Image
              alt="luzonHome"
              src="/home2.png"
              layout="fill"
              objectFit="cover"
              />
             </ImgWrapper>

            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <div style={{
              position: "absolute",
              top: 1400,
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
              transform: "rotate(180deg)"
      }}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
    style={{        position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "120px",}}>
        <path style={{fill: "white"}} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

      
      
  
    </>
  );
}
  





export default InfoSection;