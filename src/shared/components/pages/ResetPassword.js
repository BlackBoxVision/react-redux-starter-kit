import React, {Component, PropTypes} from 'react';
import { Card, CardText, TextField, RaisedButton } from 'material-ui';

class ResetPassword extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#FFF8E1' }}>
                <Card containerStyle={{ margin: '200px' }}>
                    <CardText>
                        <form method="POST">
                            <div>
                                <TextField floatingLabelText='Email' fullWidth/>
                            </div>
                            <div>
                                <RaisedButton label='Recover Password' type='submit' primary/>
                            </div>
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default ResetPassword;