import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import {colors, Container} from '../../styles/globalStyles'
import {StyledBurger} from './Navbar.elements';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger