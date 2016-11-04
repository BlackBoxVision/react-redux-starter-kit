import styled from 'styled-components';

export default styled.h1`
    color: ${props => props.color || 'white'};
    text-align: center;
    font-family: 'Roboto'
    font-size: 64px;
    width: 100%;
`