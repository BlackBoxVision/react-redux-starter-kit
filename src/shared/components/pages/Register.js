import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';

import RegisterContainer from '../atoms/Layout/Container';


class Register extends React.Component {

    render() {
        return (
            <RegisterContainer>
                <Flex align="center" justify="center" wrap>
                    <Box sm={1} md={4} lg={4}/>
                    <Box sm={10} md={4} lg={4} mt={6}>
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
                    <Box sm={1} md={4} lg={4}/>
                </Flex>
            </RegisterContainer>
        );
    }

	handleLogin = event => this.props.router.push('/login');
}

export default withRouter(Register);