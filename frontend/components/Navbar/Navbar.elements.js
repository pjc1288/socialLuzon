import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import {colors, Container} from '../../styles/globalStyles'



export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    box-shadow: 0px 10px 10px -6px ${colors.gray3};
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      color: ${colors.secondary};
      font-size: 1.8rem;
      cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colors.secondaryLight};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${colors.secondary};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;



export const StyledLink = styled.a`
  font-family: Poppins;
  color: ${colors.secondary};
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-transform: uppercase;
    color: ${colors.white};
    text-align: center;
    font-size: 22px;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
    font-size: 24px;
      background-color: ${colors.secondary};
      transition: all 0.3s ease;
    }
  }
`;

