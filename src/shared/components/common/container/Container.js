import styled from 'styled-components';

export default styled.div`
    height: 100%;
    min-height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white' };
`;