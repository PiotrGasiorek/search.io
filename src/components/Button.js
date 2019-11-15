import styled from 'styled-components';

const Button = styled.button `
    width: 100%;
    background: #007FCC;
    color: white;
    height: 60px;
    padding: 0 20px;
    font-size: 18px;
    border: none;
    font-weight: 500;
    transition: .5s;
    margin-top: 1rem;
    border-radius: 3px;
    
    :focus{
        background: #0068A7;
    }

    :hover{
        background: #0093ED;
    }
`;

export default Button;