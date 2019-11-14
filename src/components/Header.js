import React from 'react';
import styled from 'styled-components';
import logo from '../gallery/logo.svg';
import background from '../gallery/background.jpg';
import Title from './Title';
import SearchForm from './SearchForm';

const Header = function(props) {
    return (
        <HeaderStyles>
            <img src={logo} alt="App logo"/>
            <div>
                <Title>Start searching for photos</Title>
                <SearchForm/>
            </div>
        </HeaderStyles>
    );
}

const HeaderStyles = styled.div `
    width: 100%;
    background: #007FCC;
    height: 80vh;
    position: relative;
    background-image: url('${background}');
    background-size: cover;
    display: flex;
    align-items:flex-end;
    justify-content: center;
    
    img {
        position: absolute;
        top: 3rem;
        left: 9vw;
    }

    div{
    }

`;

export default Header;



