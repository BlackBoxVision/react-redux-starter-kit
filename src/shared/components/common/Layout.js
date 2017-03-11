import React, { Component ,PropTypes } from 'react';
import Container from './Container';

class Layout extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    }

    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default Layout;