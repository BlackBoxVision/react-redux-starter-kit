import React, { Component ,PropTypes } from 'react';
import Container from '../atoms/Layout/Container';

class Main extends Component {
    render() {
        const { children } = this.props;

        return (
            <Container>
                {children}
            </Container>
        )
    }
}

Main.props = {
    children: PropTypes.array.isRequired
};

export default Main;