import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';

import ResetPasswordContainer from '../atoms/Layout/Container';


class ResetPassword extends React.Component {

    render() {
        return (
            <ResetPasswordContainer>
                <Flex align="center" justify="center" wrap>
                    <Box sm={1} md={4} lg={4}/>
                    <Box sm={10} md={4} lg={4} mt={6}>
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
                    <Box sm={1} md={4} lg={4}/>
                </Flex>
            </ResetPasswordContainer>
        );
    }

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(ResetPassword);