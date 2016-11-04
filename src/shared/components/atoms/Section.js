import styled from 'styled-components';

export default styled.section`
    background-image: url("${props => props.backgroundImage? props.backgroundImage : ''}"); 
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-color: ${props => props.backgroundColor || '#424242'};
    width: 100%;
    height: 100vh;
    padding-top: ${props => props.paddingTop || '0px'}
`;