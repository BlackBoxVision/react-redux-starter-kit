import React, {Component, PropTypes} from 'react';
import { Card, CardText, TextField, RaisedButton, Checkbox } from 'material-ui';

class Login extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#FFF8E1' }}>
                <Card containerStyle={{ margin: '200px' }}>
                    <CardText>
                        <form>
                            <div>
                                <TextField floatingLabelText='Username' fullWidth/>
                            </div>
                            <div>
                                <TextField floatingLabelText='Password' fullWidth/>
                            </div>
                            <div>
                                <RaisedButton label='LOGIN' type='submit' primary/>
                            </div>
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Login;