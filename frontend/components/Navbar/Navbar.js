
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import Burger from './Burger';
import {Nav} from './Navbar.elements';
import Search from '../blog/Search';




const Navbar = () => {
  return (
    <>
    <Nav>
    <div style={{ position: 'relative', width: '200px', height: '80px' }}>
      <Image
        alt="Logo"
        src="/logo.svg"
        layout="fill"
        objectFit="contain"
      />
    </div>
      <Burger />
    </Nav>
    <Search>Busqueda</Search>
    </>
  )
}

export default Navbar