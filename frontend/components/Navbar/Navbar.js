
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import Burger from './Burger';
import {Nav} from './Navbar.elements';



const Navbar = () => {
  return (
    
    <Nav>
    <div style={{ position: 'relative', width: '200px', height: '80px' }}>
      <Image
        alt="Mountains"
        src="/logo.png"
        layout="fill"
        objectFit="contain"
      />
    </div>
      <Burger />
    </Nav>
  )
}

export default Navbar