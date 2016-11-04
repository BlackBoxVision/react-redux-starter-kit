import styled from 'styled-components';

export default styled.h3`
    padding: 25px;
    margin-top: 15px;
    display: inline;
    text-align: center
    color: ${props => props.color || 'white'};
`;