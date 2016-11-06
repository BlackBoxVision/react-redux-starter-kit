import React, {Component, PropTypes} from 'react';

class Login extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <div>this is login</div>
                <div>{children}</div>
            </div>
        );
    }
}

Login.props = {
    children: PropTypes.array.isRequired
};

export default Login;