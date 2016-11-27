import React, {Component, PropTypes} from 'react';
import { Card, CardText, TextField, RaisedButton } from 'material-ui';
import { withRouter } from 'react-router';
import { Flex, Box } from 'reflexbox';
import LoginContainer from '../atoms/Login/LoginContainer';

class Login extends Component {
    handleSubmit = (event) => this.props.router.push('/dashboard');

    render() {
        return (
            <LoginContainer>
                <Flex align="center" justify="center" wrap>
                    <Box sm={0} md={4} lg={4}/>
                    <Box sm={12} md={4} lg={4} mt={6}>
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
                                        <RaisedButton label='Login' type='submit' primary/>
                                    </div>
                                </form>
                            </CardText>
                        </Card>
                    </Box>
                    <Box sm={0} md={4} lg={4}/>
                </Flex>
            </LoginContainer>
        );
    }
}

export default withRouter(Login);