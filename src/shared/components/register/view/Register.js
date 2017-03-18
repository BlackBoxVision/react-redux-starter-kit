import React, {PropTypes} from 'react';

import RegisterForm from './RegisterForm';
import RegisterFormMobile from './RegisterFormMobile';

import FlexContainer from '../../common/container/FlexContainer';


class RegisterView extends React.Component {
    render() {
	    const styles = this.getStyles();

	    return (
            <FlexContainer style={styles.container}>
                {this.getRegisterForm()}
            </FlexContainer>
        );
    }

    getRegisterForm = () => {
        if (this.props.isMobile()) {
            return (
                <RegisterFormMobile handleLogin={this.handleLogin}/>
            );
        } else {
            return (
                <RegisterForm handleLogin={this.handleLogin}/>
            );
        }
    }

	getStyles = () => ({
        container: {
            backgroundColor: this.props.isMobile() ? "white" : "#E0E0E0"
        }
	});

	handleLogin = event => this.props.router.push('/login');
}

export default RegisterView;