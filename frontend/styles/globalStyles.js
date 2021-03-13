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
}


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
    font-size: 0.85em;
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
    font-size: 0.5em;
    line-height: 24px;
    color: ${colors.black};

    ${props => props.medium && css`
    font-size: 0.43em;
    `}

    ${props => props.small && css`
    font-size: 0.38em;
    `}

    ${props => props.primary && css`
        color: ${colors.primary};
    `}    padding: 0 60px;

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



export const Container =styled.div`
z-index:1;
width:100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`
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

    ${props => props.outline && css`
    color: ${colors.secondary};
    background-color: transparent;
    border: 2px solid ${colors.secondary};
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







