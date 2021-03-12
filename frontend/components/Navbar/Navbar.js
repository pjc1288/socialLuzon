
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import {Nav} from './Navbar.elements';


const Navbar = () => {
  return (
    
    <Nav>
      <div className="logo"> 
        SOCIAL LUZON
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar