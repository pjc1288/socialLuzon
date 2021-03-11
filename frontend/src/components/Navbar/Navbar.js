import React, {useState} from 'react'
import {FaBars, FaHandPointLeft, FaTimes} from 'react-icons/fa'
import {Paragraph} from '../../globalStyles'
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
    } from './Navbar.elements'




const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick =() => setClick (!click)
    
    
    return ( 

        <>
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                <Paragraph primary >Social Luzon</Paragraph>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onclick={handleClick} click={click}>

                <NavItem>
                    <NavLinks to='/'>
                        Home
                    </NavLinks>
                </NavItem>
            </NavMenu>
            
        </NavbarContainer>
        </Nav>
        </>

     );
}
 
export default Navbar;