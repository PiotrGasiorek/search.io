import React, { Component } from 'react'
import styled from 'styled-components';

/* Components */
import Input from './Input';
import Button from './Button';
import Label from './Label';

class SearchForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
          active: false
        }
  
        this._onBlur = this._onBlur.bind(this)
        this._onFocus = this._onFocus.bind(this)
      }

      _onBlur(){
        console.log('not active');
        this.setState({
            active: false
        })
      }

      _onFocus(){
          console.log('active');
        this.setState({
            active: true
        })
      }

    render() {
        return (
            <SearchFormStyles>
                <Label active={this.state.active}>Keywords</Label>
                <Input onFocus={this._onFocus} onBlur={this._onBlur} placeholder='Greece coast'/>
                <Button>Search</Button>
            </SearchFormStyles>
        );
    }
    
}


const SearchFormStyles = styled.form `
    max-width: 400px;
    background: white;
    border-radius: 3px;
    height: 250px;
    margin: 4vw auto;
    padding: 30px 40px;
    }
`;

export default SearchForm;