import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';

import RegisterContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';
import RegisterForm from './RegisterForm';
import RegisterFormMobile from './RegisterFormMobile';

import Mobile from '../../utils/Mobile';

import withResize from '../common/withResize';

class Register extends React.Component {

    render() {
	    const background = Mobile.is() || this.props.width < 480 ? "white" : "#E0E0E0";

	    return (
            <RegisterContainer backgroundColor={background}>
                <FlexContainer>
                    {this.getRegisterForm()}
                </FlexContainer>
            </RegisterContainer>
        );
    }

    getRegisterForm = () => {
        if (Mobile.is() || this.props.width < 480) {
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

export default withRouter(withResize(Register));