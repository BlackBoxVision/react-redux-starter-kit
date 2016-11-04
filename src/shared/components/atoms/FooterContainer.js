import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.backgroundColor || '#424242'};
    width: 100%;
    height: ${props => props.height || '125px'};
    text-align: center;
`;