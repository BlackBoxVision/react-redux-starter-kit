import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import Form from '../../common/html/Form';


class ResetPasswordForm extends React.Component {
	static propTypes = {
	    isMobile: PropTypes.func.isRequired,
		handleLogin: PropTypes.func.isRequired
	};

	render() {
	    const ResetPassword = this.getForm();

        if (this.props.isMobile()) {
            return <ResetPassword/>;
        }

		return (
			<Card>
				<CardText>
                    <ResetPassword/>
				</CardText>
			</Card>
		)
	}

    getForm = () => (
        <Form method="POST">
            <TextField floatingLabelText='Email' hintText='Email' fullWidth/>
            <div>
                <FlatButton label='Login' onClick={this.props.handleLogin} primary/>
                <RaisedButton label='Recover Password' type='submit' primary/>
            </div>
        </Form>
    );
}

export default ResetPasswordForm;