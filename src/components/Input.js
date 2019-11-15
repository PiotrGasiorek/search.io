import styled from 'styled-components';

const Input = styled.input `
    width: 100%;
    background: #F9F9F9;
    border: none;
    height: 60px;
    padding: 0 20px;
    font-size: 18px;
    border-bottom: 2px solid white;
    transition: .5s;

    ::placeholder{
        color: #969696;
    }
    
    :focus{
        border-bottom: 2px solid #007FCC;
        transition: 1s;
    }
`;

export default Input;