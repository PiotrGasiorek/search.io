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
        this._onSubmit = this._onSubmit.bind(this)
      }

      _onBlur(){
        this.setState({
            active: false
        })
      }

      _onFocus(){
        this.setState({
            active: true
        })
      }

      _onSubmit(e){
        e.preventDefault();
      }

    render() {
        return (
            <SearchFormStyles>
                <div>
                    <Label active={this.state.active}>Keywords</Label>
                    <Input onFocus={this._onFocus} onBlur={this._onBlur} placeholder='Greece coast'/>
                    <Button type='submit' onClick={this._onSubmit}>Search</Button>
                </div>
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
    display: flex;
    align-items: center;
    }
`;

export default SearchForm;