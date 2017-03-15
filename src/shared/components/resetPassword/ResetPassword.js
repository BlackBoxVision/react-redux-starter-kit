import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import ResetPasswordContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';

import ResetPasswordForm from './ResetPasswordForm';
import ResetPasswordFormMobile from './ResetPasswordFormMobile';

import Mobile from '../../utils/Mobile';
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
        if (this.isMobile()) {
            return (
                <ResetPasswordFormMobile handleLogin={this.handleLogin}/>
            )
        } else {
            return (
                <ResetPasswordForm handleLogin={this.handleLogin}/>
            )
        }
    }

	getStyles = () => {
		return {
			container: {
				backgroundColor: this.isMobile() ? "white" : "#E0E0E0"
			}
		};
	}

    isMobile = () => Mobile.is() || this.props.width < 480;

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(withResize(ResetPassword));