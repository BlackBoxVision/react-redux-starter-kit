import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import Form from '../../common/html/Form';


class LoginForm extends React.Component {
	static propTypes = {
	    isMobile: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		handleRegister: PropTypes.func.isRequired,
		handlePasswordForget: PropTypes.func.isRequired
	};

	render() {
        if (this.props.isMobile()) {
            return this.getForm();
        }

		return (
			<Card>
				<CardText>
                    {this.getForm()}
				</CardText>
			</Card>
		);
	}

	getForm = () => (
        <Form method="POST" onSubmit={this.props.handleSubmit}>
            <TextField floatingLabelText='Username' hintText='Username' fullWidth/>
            <TextField floatingLabelText='Password' hintText='Password' fullWidth/>
            <div>
                <FlatButton label='Register' onClick={this.props.handleRegister} primary/>
                <FlatButton label='Forgot password?' onClick={this.props.handlePasswordForget} primary/>
                <RaisedButton label='Login' type='submit' primary/>
            </div>
        </Form>
    );
}

export default LoginForm;