import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white' };
`;