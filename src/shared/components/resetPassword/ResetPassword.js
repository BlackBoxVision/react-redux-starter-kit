import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import ResetPasswordContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';

import ResetPasswordForm from './ResetPasswordForm';
import ResetPasswordFormMobile from './ResetPasswordFormMobile';

import Mobile from '../../utils/Mobile';


class ResetPassword extends React.Component {

    render() {
        return (
            <ResetPasswordContainer backgroundColor={!Mobile.is() ? "#E0E0E0" : "white"}>
                <FlexContainer>
                    {this.getResetPasswordForm()}
                </FlexContainer>
            </ResetPasswordContainer>
        );
    }

    getResetPasswordForm = () => {
        if (Mobile.is()) {
            return (
                <ResetPasswordFormMobile handleLogin={this.handleLogin}/>
            )
        } else {
            return (
                <ResetPasswordForm handleLogin={this.handleLogin}/>
            )
        }
    }

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(ResetPassword);