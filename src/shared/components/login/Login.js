import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import LoginForm from './LoginForm';
import LoginFormMobile from './LoginFormMobile';

import FlexContainer from '../common/FlexContainer';
import withResize from '../common/withResize';


class Login extends React.Component {

    render() {
    	const styles = this.getStyles();

        return (
	        <FlexContainer style={styles.container}>
		        {this.getLoginForm()}
	        </FlexContainer>
        );
    }

    getLoginForm = () => {
        if (this.props.isMobile()) {
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

    getStyles = () => {
    	return {
    		container: {
			    backgroundColor: this.props.isMobile() ? "white" : "#E0E0E0"
		    }
	    };
    }

	handleSubmit = event => this.props.router.push('/dashboard');

	handleRegister = event => this.props.router.push('/register');

	handlePasswordForget = event => this.props.router.push('/resetPassword');
}

export default withRouter(withResize(Login));