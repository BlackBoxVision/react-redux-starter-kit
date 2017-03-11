import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import withRouter from 'react-router/lib/withRouter';
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';

import LoginContainer from '../atoms/Layout/Container';


class Login extends React.Component {

    render() {
        return (
            <LoginContainer backgroundColor="#FFAB91">
                <Flex align="center" justify="center" wrap>
                    <Box sm={1} md={4} lg={4}/>
                    <Box sm={10} md={4} lg={4} mt={6}>
                        <Card containerStyle={{ height: "75%" }}>
                            <CardText>
                                <form method="POST" onSubmit={this.handleSubmit}>
                                    <div>
                                        <TextField floatingLabelText='Username' fullWidth/>
                                    </div>
                                    <div>
                                        <TextField floatingLabelText='Password' fullWidth/>
                                    </div>
                                    <div>
                                        <FlatButton label='Register' onClick={this.handleRegister} primary/>
                                        <FlatButton label='Forgot password?' onClick={this.handlePasswordForget} primary/>
                                        <RaisedButton label='Login' type='submit' primary/>
                                    </div>
                                </form>
                            </CardText>
                        </Card>
                    </Box>
                    <Box sm={1} md={4} lg={4}/>
                </Flex>
            </LoginContainer>
        );
    }

	handleSubmit = event => this.props.router.push('/dashboard');

	handleRegister = event => this.props.router.push('/register');

	handlePasswordForget = event => this.props.router.push('/resetPassword');
}

export default withRouter(Login);