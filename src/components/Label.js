import styled from 'styled-components';

const Label = styled.label `
    color: ${props => props.active ? '#007FCC' : '#969696'};
    font-size: 16px;
    transition: .5s;
`;

export default Label;