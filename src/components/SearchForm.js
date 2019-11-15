import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Label from './Label';

const SearchForm = function(props) {
    return (
        <SearchFormStyles>
            <Label>Keywords</Label>
            <Input placeholder='Greece coast'/>
            <Button>Search</Button>
        </SearchFormStyles>
    );
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