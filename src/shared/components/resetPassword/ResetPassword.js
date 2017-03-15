import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import ResetPasswordForm from './ResetPasswordForm';
import ResetPasswordFormMobile from './ResetPasswordFormMobile';

import FlexContainer from '../common/FlexContainer';
import withResize from '../common/withResize';


class ResetPassword extends React.Component {

    render() {
        const styles = this.getStyles();

	    return (
            <FlexContainer style={styles.container}>
                {this.getResetPasswordForm()}
            </FlexContainer>
        );
    }

    getResetPasswordForm = () => {
        if (this.props.isMobile()) {
            return (
                <ResetPasswordFormMobile handleLogin={this.handleLogin}/>
            )
        } else {
            return (
                <ResetPasswordForm handleLogin={this.handleLogin}/>
            )
        }
    }

	getStyles = () => ({
        container: {
            backgroundColor: this.props.isMobile() ? "white" : "#E0E0E0"
        }
	});

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(withResize(ResetPassword));