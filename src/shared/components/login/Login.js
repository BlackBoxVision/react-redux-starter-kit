import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import Mobile from '../../utils/Mobile';
import LoginContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';
import LoginFormMobile from './LoginFormMobile';
import LoginForm from './LoginForm';


class Login extends React.Component {

    render() {
        return (
            <LoginContainer backgroundColor="#FFAB91">
                <FlexContainer>
	                {this.getLoginForm()}
                </FlexContainer>
            </LoginContainer>
        );
    }

    getLoginForm = () => {
        if (Mobile.is()) {
            return (
                <LoginFormMobile
                    handleSubmit={this.handleSubmit}
                    handleRegister={this.handleRegister}
                    handlePasswordForget={this.handlePasswordForget}
                />
            )
        } else {
	        return (
                <LoginForm
                    handleSubmit={this.handleSubmit}
                    handleRegister={this.handleRegister}
                    handlePasswordForget={this.handlePasswordForget}
                />
	        )
        }
    }

	handleSubmit = event => this.props.router.push('/dashboard');

	handleRegister = event => this.props.router.push('/register');

	handlePasswordForget = event => this.props.router.push('/resetPassword');
}

export default withRouter(Login);