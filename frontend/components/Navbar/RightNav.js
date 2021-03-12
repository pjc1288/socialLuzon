import React from 'react';
import styled from 'styled-components';
import {colors, Container} from '../../styles/globalStyles'
import Link from 'next/link';
import {Ul, NavItem, NavLinks} from './Navbar.elements'




const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
            <NavItem>
              <Link href='/'>
                <NavLinks>Página Principal</NavLinks>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/signin'>
                <NavLinks>Sign In</NavLinks>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/signout'>
                <NavLinks>Sign Out</NavLinks>
              </Link>
            </NavItem>

    </Ul>
  )
}

export default RightNav