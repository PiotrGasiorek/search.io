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
                <SearchForm onSubmit={props.searchResoults}/>
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
    padding: 9vw 9vw 0 9vw;

    img {
        position: absolute;
        top: 3rem;
        left: 9vw;
    }

    @media only screen and (max-width: 500px) {
        height: 100vh;
    }

`;

export default Header;



