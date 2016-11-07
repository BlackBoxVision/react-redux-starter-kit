import React, {Component, PropTypes} from 'react';
import { Card, CardText, TextField, RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';
import LoginContainer from '../atoms/Login/LoginContainer';

class Login extends Component {
    handleSubmit = (event) => browserHistory.push('/dashboard');

    render() {
        return (
            <LoginContainer>
                <Card>
                    <CardText>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <TextField floatingLabelText='Username' fullWidth/>
                            </div>
                            <div>
                                <TextField floatingLabelText='Password' fullWidth/>
                            </div>
                            <div>
                                <RaisedButton label='Login' type='submit' primary/>
                            </div>
                        </form>
                    </CardText>
                </Card>
            </LoginContainer>
        );
    }
}

export default Login;