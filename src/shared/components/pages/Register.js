import React, {Component, PropTypes} from 'react';
import { Card, CardText, TextField, RaisedButton } from 'material-ui';

class Register extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#FFF8E1' }}>
                <Card containerStyle={{ margin: '200px' }}>
                    <CardText>
                        <form method="POST">
                            <div>
                                <TextField floatingLabelText='Username' fullWidth/>
                            </div>
                            <div>
                                <TextField floatingLabelText='Password' fullWidth/>
                            </div>
                            <div>
                                <RaisedButton label='Register' type='submit' primary/>
                            </div>
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Register;