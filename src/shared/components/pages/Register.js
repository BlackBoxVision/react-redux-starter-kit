import React, {Component, PropTypes} from 'react';
import { withRouter } from 'react-router';
import { Card, CardText, TextField, RaisedButton, FlatButton } from 'material-ui';
import { Flex, Box } from 'reflexbox';
import RegisterContainer from '../atoms/Login/LoginContainer';

class Register extends Component {
    handleLogin = event => this.props.router.push('/login');

    render() {
        return (
            <RegisterContainer>
                <Flex align="center" justify="center" wrap>
                    <Box sm={0} md={4} lg={4}/>
                    <Box sm={12} md={4} lg={4} mt={6}>
                        <Card containerStyle={{ height: "75%" }}>
                            <CardText>
                                <form method="POST">
                                    <div>
                                        <TextField floatingLabelText='Username' fullWidth/>
                                    </div>
                                    <div>
                                        <TextField floatingLabelText='Password' fullWidth/>
                                    </div>
                                    <div>
                                        <FlatButton label='Login' onClick={this.handleLogin} primary/>
                                        <RaisedButton label='Register' type='submit' primary/>
                                    </div>
                                </form>
                            </CardText>
                        </Card>
                    </Box>
                    <Box sm={0} md={4} lg={4}/>
                </Flex>
            </RegisterContainer>
        );
    }
}

export default withRouter(Register);