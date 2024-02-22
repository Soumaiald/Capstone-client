import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './sideNav';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';


const StyledHeartIcon = styled(FaHeart )`
    color: red;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const StyledCartIcon = styled(FaShoppingCart )`
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;


const HeaderWrapper = styled.header`
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 1.5em;
`;


const Nav = styled.nav`
    display: flex;
    align-items: center;
    font-size: 1.5em;

    a {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Icon = styled.div`
    cursor: pointer;
`;


const Header = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    return (
        <>
            <HeaderWrapper>
                <Icon onClick={toggleSideNav}>
                    <FontAwesomeIcon icon={faBars} />
                </Icon>
                <Title>Movies Online Shop</Title>
                <Nav>
                    <StyledCartIcon />
                    <StyledHeartIcon />
                </Nav>
            </HeaderWrapper>
            <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />
        </>
    );
};

export default Header;
