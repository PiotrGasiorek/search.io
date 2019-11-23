import React from 'react';
import styled from 'styled-components';
import logo from '../gallery/pexelsLogo.png';

const Footer = function(props) {
    return (
        <FooterStyles>
            <a href="https://www.pexels.com"><img src={logo} alt="Pexels logo"/></a>
            <p>Created by <a href="https://piotrgasiorek.github.io/developer/">Piotr Gąsiorek</a></p>
        </FooterStyles>
    );
}

const FooterStyles = styled.footer `
    color: #969696;
    font-size: 20px;
    text-align: center;
    margin: 4rem 0 3rem 0;

    a {
        color: #333333;
        font-weight: 700;
        text-decoration: none;
    }
`;

export default Footer;