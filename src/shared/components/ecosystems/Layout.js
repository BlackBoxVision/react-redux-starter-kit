import React, { Component ,PropTypes } from 'react';
import Container from '../atoms/Layout/Container';

class Main extends Component {
    static propTypes = {
        children: PropTypes.array.isRequired
    }

    render() {
        const { children } = this.props;

        return (
            <Container>
                {children}
            </Container>
        )
    }
}

export default Main;