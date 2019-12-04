import React from 'react';
import styled from 'styled-components';
import generatePhotos from '../js/generatePhotos';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.displayResults = this.displayResults.bind(this)
        this.cleanPreviousResults = this.cleanPreviousResults.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.searchedPhotos !== prevProps.searchedPhotos){
            this.displayResults()
        }
    }
    
    displayResults(){
        let columns = [...document.getElementsByClassName('column')];
        this.cleanPreviousResults(columns);
        let photos = generatePhotos(this.props.searchedPhotos);
        columns.forEach((column) => {
            for(let i = 0; i < 4; i++){
                let photo = photos.shift();
                column.innerHTML += photo;
            }
        });
    }

    cleanPreviousResults(columns){
        columns.forEach(column => column.innerHTML = '');
    }
    
    render() {

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