import React, {Component, PropTypes} from 'react';
import { withRouter } from 'react-router';
import { Card, CardText, TextField, RaisedButton, FlatButton } from 'material-ui';
import { Flex, Box } from 'reflexbox';
import ResetPasswordContainer from '../atoms/Login/LoginContainer';

class ResetPassword extends Component {
    handleLogin = event => this.props.router.push('/login');

    render() {
        return (
            <ResetPasswordContainer>
                <Flex align="center" justify="center" wrap>
                    <Box sm={0} md={4} lg={4}/>
                    <Box sm={12} md={4} lg={4} mt={6}>
                        <Card containerStyle={{ height: "75%" }}>
                            <CardText>
                                <form method="POST">
                                    <div>
                                        <TextField floatingLabelText='Email' fullWidth/>
                                    </div>
                                    <div>
                                        <FlatButton label='Login' onClick={this.handleLogin} primary/>
                                        <RaisedButton label='Recover Password' type='submit' primary/>
                                    </div>
                                </form>
                            </CardText>
                        </Card>
                    </Box>
                    <Box sm={0} md={4} lg={4}/>
                </Flex>
            </ResetPasswordContainer>
        );
    }
}

export default withRouter(ResetPassword);