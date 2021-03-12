import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Footer</p>
    </FooterSection>
  );
};

export default Footer;
