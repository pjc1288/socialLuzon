import styled, {createGlobalStyle, css} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding:0;
    font-family: 'Poppins', sans-serif;

}
`

export const colors = {
    primary: '#379C4F',
    primaryLight: '#9CCF54',
    secondary: '#F5857A',
    secondaryLight: '#FFAA99',
    error: '#F03D3E',
    alert: '#FCB057',
    success: '#B5E848',
    white: '#FFFFFF',
    black: '#212429',
    gray1: '#F8F9FA',
    gray2: '##DDE2E5',
    gray3: '#ACB5BD',
    gray4: '#495057',
    gradient: 'linear-gradient(254.41deg, #5BAC4C 8.66%, rgba(156, 207, 84, 0.35) 103.52%)'
}

export const Line = styled.div`
  border-bottom:solid 4px ${colors.secondary};
  border-radius: 3px;
  width:10%;
  margin-top:-5px;
  margin-bottom:10px;
`;

export const Title = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    color: #000000;

    ${props => props.black && css`
        color: #F03D3E
    `}
`;

export const Title2 = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 0.95em;
    line-height: 65px;
    color: ${colors.black};

    ${props => props.white && css`
        color: #FFFFFFFF
    `}
`;

export const Paragraph = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8em;
    line-height: 25px;
    color: ${colors.black};
    outline:'none'

    ${props => props.medium && css`
    font-size: 0.8em;
    `}
    ${props => props.lessMargin && css`
    margin: -20px;
    `}
    ${props => props.lessMarginTop && css`
    margin-top: -50px;
    `}

    ${props => props.big && css`
    font-size: 1em;
    `}

    ${props => props.small && css`
    font-size: 0.6em;
    `}

    ${props => props.primary && css`
        color: ${colors.primary};
    `} 

    ${props => props.primaryLight && css`
        color: ${colors.primaryLight};
    `}   

    ${props => props.secondary && css`
        color: ${colors.secondary};
    `}

    ${props => props.white && css`
    color: ${colors.white};
    `}

    ${props => props.grey && css`
    color: ${colors.grey3};
    `}

    ${props => props.gray && css`
    color: ${colors.gray3};
    `}

    ${props => props.disable && css`
    color: ${colors.grey2};
    `}
`;


export const Buttons = styled.button`
    font-weight: bold;
    line-height: 20px;
    height: 48px;
    border-radius: 40px;
    margin: 0 24px;
    cursor: pointer;

    ${props => props.contained && css`
    background-color: ${colors.secondaryLight};
    border: 2px solid ${colors.secondary};
    color: ${colors.white};
    `}

    ${props => props.outlineSecondary && css`
    color: ${colors.secondary};
    background-color: transparent;
    border: 2px solid ${colors.secondary};
    `}

    ${props => props.outlineGrey && css`
    color: ${colors.grey4};
    background-color: transparent;
    border: 2px solid ${colors.grey4};
    `}


    ${props => props.gray && css`
    background-color: ${colors.gray3};
    border: 0px;
    color: ${colors.white};
    `}

    ${props => props.dark && css`
    background-color: ${colors.gray4};
    border: 0px;
    color: ${colors.white};
    `}

    ${props => props.small && css`
    padding: 0 60px;
    `}
    ${props => props.medium && css`
    padding: 0 100px;
    `}
    ${props => props.big && css`
    padding: 0 140px;
    `}
`



export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const InputForm = styled.input`
  color: ${colors.gray4};
	border: 2px ${colors.gray4};
  font-size: 1.2rem;
	margin: 20px auto;
  padding: 1.5rem 1rem;
  border-radius: 0.2rem;
  background-color: transparent;
  border: 1px solid #ACB5BD;
	border-radius: 10px;
  width: 50%;
  height: 20px;
  display: block;
  transition: all 0.3s;
  @media screen and (max-width: 960px) {
    width: 80%;
  }

`;


