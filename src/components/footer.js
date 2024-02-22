import React from 'react';
import styled from 'styled-components';

// Assuming you have a logo image in your project
import logo from '../logo.jpeg';

const FooterWrapper = styled.footer`
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const Logo = styled.img`
    height: 40px;
    width: auto;
    margin-right: 10px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Logo src={logo} alt="Logo" />
            <p>&copy; 2022 Movies Online Shop</p>
        </FooterWrapper>
    );
};

export default Footer;
