import React from 'react';
import styled from 'styled-components';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {receivedPhotos: []};
        this.displayPhotos = this.displayPhotos.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.searchedPhotos !== prevProps.searchedPhotos){
            this.setState({
              receivedPhotos: Array.from(this.props.searchedPhotos)
            }, this.displayPhotos())
        }
    }
    
    displayPhotos(){
        // setTimeout added to prevent operations on unchanged state
        setTimeout(() => {
            let columns = document.getElementsByClassName('column');
            let receivedPhotos = this.state.receivedPhotos;
            columns.forEach((column) => {
                /* for(i = 0; i < 8; i++){
                    column.innerHtml += `<img src={}/>`
                } */
            });
        }, 0);
       
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