import React from 'react';
import styled from 'styled-components';
import {colors, Container} from '../../styles/globalStyles'
import NProgress from 'nprogress';
import Link from 'next/link';
import Router from 'next/router'
import {signout, isAuth} from '../actions/auth'
import {Ul, NavItem, NavLinks} from './Navbar.elements'

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
            <NavItem>
              <Link href='/'>
                <NavLinks>Página Principal</NavLinks>
              </Link>
            </NavItem>



            {!isAuth() && (
              <>
            <NavItem>
              <Link href='/signin'>
                <NavLinks>Sign In</NavLinks>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/signup'>
                <NavLinks>Sign Up</NavLinks>
              </Link>
            </NavItem>
            </>
            )}


            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLinks>{`${isAuth().name}'s Dashboard`}</NavLinks>
                </Link>
              </NavItem>
            )}


            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLinks>{`${isAuth().name}'s Dashboard`}</NavLinks>
                </Link>
              </NavItem>
            )}



          {isAuth() && (
              <NavItem>
                <NavLinks style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLinks>
              </NavItem>
            )}

    </Ul>
  )
}

export default RightNav