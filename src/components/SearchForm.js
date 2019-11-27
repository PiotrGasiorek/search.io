import React, { Component } from 'react'
import styled from 'styled-components';

/* Components */
import Input from './Input';
import Button from './Button';
import Label from './Label';

const API_key = '563492ad6f9170000100000164c01ee57bbe49caaf75c9d7b1350aa1';


class SearchForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
          active: false,
          urlForPhotos: ''
        }
  
        this.onBlur = this.onBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
      }

    onBlur(){
      this.setState({
          active: false
      })
    }

    onFocus(){
      this.setState({
          active: true
      })
    }

    onChange(e){
      this.setState({
          urlForPhotos: `https://api.pexels.com/v1/search?query=${e.target.value}&per_page=16&page=1`
      });
    }

    onSubmit(e){
      e.preventDefault();

      fetch(this.state.urlForPhotos, {
        headers: {
          Authorization: API_key
        }
      }).then(resp => resp.json())
      .then(resp => {
        resp.total_results === 0 ? alert('No photos were found') :
        this.props.onSubmit(resp.photos);
      })
      .catch(error => alert(error));
    }

    render() {
      return (
          <SearchFormStyles>
              <div>
                <Label active={this.state.active}>Keywords</Label>
                <Input onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} placeholder='Greece coast'/>
                <Button type='submit' onClick={this.onSubmit}>Search</Button>
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