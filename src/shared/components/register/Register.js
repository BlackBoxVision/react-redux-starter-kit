import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import RegisterContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';
import RegisterForm from './RegisterForm';
import RegisterFormMobile from './RegisterFormMobile';

import Mobile from '../../utils/Mobile';

class Register extends React.Component {

    render() {
        return (
            <RegisterContainer backgroundColor="#FFAB91">
                <FlexContainer>
                    {this.getRegisterForm()}
                </FlexContainer>
            </RegisterContainer>
        );
    }

    getRegisterForm = () => {
        if (Mobile.is()) {
            return (
                <RegisterFormMobile handleLogin={this.handleLogin}/>
            );
        } else {
            return (
                <RegisterForm handleLogin={this.handleLogin}/>
            );
        }
    }

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(Register);