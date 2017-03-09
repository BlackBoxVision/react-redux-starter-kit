import React, { Component ,PropTypes } from 'react';
import Container from '../atoms/Layout/Container';

class Main extends Component {
    static propTypes = {
        children: PropTypes.array.isRequired
    }

    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default Main;