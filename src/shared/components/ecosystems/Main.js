import React, { Component ,PropTypes } from 'react';
import MainContainer from '../atoms/MainContainer';

class Main extends Component {
    render() {
        const { children } = this.props;

        return (
            <MainContainer>
                {children}
            </MainContainer>
        )
    }
}

Main.props = {
    children: PropTypes.array.isRequired
};

export default Main;