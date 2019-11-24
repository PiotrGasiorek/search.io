import React from 'react';
import styled from 'styled-components';

const Grid = function(props) {
    return (
        <GridStyles>
            <div className="row">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
            </div>
        </GridStyles>
    );
}

const GridStyles = styled.div `
    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0 4px;
    }
    
    .column {
        -ms-flex: 25%;
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }
    
    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }
    
    @media screen and (max-width: 800px) {
        .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
        }
    }
    
    @media screen and (max-width: 600px) {
        .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
        }
    }
`;

export default Grid;