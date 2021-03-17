import Footer from './Footer';
import Navbar from './Navbar/Navbar';

import styled from 'styled-components';

const Container= styled.div`
      margin-top: 80px;
`;

export default function Layout({ children }) {
  return (
    <div>
       <Navbar/>
       <Container>
      {children}
      </Container>
      <Footer />
    </div>
  );
}
