import React, {useState} from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Paragraph, Buttons, Input, Form, Title2} from '../../styles/globalStyles'
import {Nav,
        StyledLink, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon,
        NavMenu,
        NavItem, } from './Navbar.elements'

import Link from 'next/link';


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick =() => setClick (!click)

  return (
    <>
    <Nav>
      <NavbarContainer>
     
      <NavLogo>
        <Link href='/' passHref>
          <Title2 medium primary>Social Luzón</Title2>
        </Link>
        </NavLogo>
        <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onclick={handleClick} click={click}>
            <NavItem>
            <Link href='/' passHref>
              <StyledLink>Página Principal</StyledLink>
            </Link>
            </NavItem>
            <NavItem>
            <Link href='/perfil' passHref>
              <StyledLink>Perfil</StyledLink>
            </Link>
            </NavItem>
            <NavItem>
            <Link href='/dona-contenido' passHref>
              <StyledLink>Dona Contenido</StyledLink>
            </Link>
            </NavItem>
            <NavItem>
            <Link href='/social-compartido' passHref>
              <StyledLink>Social Compartido</StyledLink>
            </Link>
            </NavItem>
            </NavMenu>

      </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;
