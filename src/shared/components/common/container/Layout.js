import React, { PropTypes } from 'react';
import Container from './Container';


class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default Layout;