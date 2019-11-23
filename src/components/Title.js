import styled from 'styled-components';

const Title = styled.h1 `
    text-align: center;
    font-size: 40px;

    @media only screen and (max-width: 500px) {
      font-size: 30px;
    }
`;

export default Title;