import styled from 'styled-components';
import {colors} from '../../styles/globalStyles'


export const Wave = styled.div`
        position: absolute;
        margin-top: 620px;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        @media screen and (max-width: 960px) {
          margin-top: 1075px;
  }
`;

export const InfoSec = styled.div`

  color: #fff;
  padding: 115px 0;
  background: ${({ lightBg }) => (lightBg ? `${colors.white}` : `${colors.gradient}`)};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  position:relative;

  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? `${colors.black}` : '#4B59F7')};
  font-size: 35px;
  line-height: 40px;
  font-weight: 200;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  @media screen and (max-width: 480px) {
          margin-top: 200px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? `${colors.black}` : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? `${colors.white}` : '#1c2237')};
  @media screen and (max-width: 480px) {
          visibility: hidden;
  }
`;