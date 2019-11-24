import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const Main = function(props) {
    return (
        <MainStyles>
            <h2>Resoults</h2>
            <Grid/>
        </MainStyles>
    );
}

const MainStyles = styled.div `
    padding: 0 9vw;

    h2 {
        text-align: center;
        font-size: 40px;
        margin: 5vw 0;

        @media only screen and (max-width: 500px) {
            font-size: 30px;
        }
    }

`;

export default Main;



