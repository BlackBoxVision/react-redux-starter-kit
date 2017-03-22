import React, {PropTypes} from 'react';

import LoginForm from './LoginForm';
import LoginFormMobile from './LoginFormMobile';

import FlexContainer from '../../common/container/FlexContainer';


class LoginView extends React.Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        isMobile: PropTypes.func.isRequired,
        isTablet: PropTypes.func.isRequired,
        isDesktop: PropTypes.func.isRequired,
        router: PropTypes.object.isRequired
    };

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
    };

    getStyles = () => ({
        container: {
            backgroundColor: this.props.isMobile() ? "white" : "#E0E0E0"
        }
    });

	handleSubmit = event => this.props.router.push('/dashboard');

	handleRegister = event => this.props.router.push('/register');

	handlePasswordForget = event => this.props.router.push('/resetPassword');
}

export default LoginView;