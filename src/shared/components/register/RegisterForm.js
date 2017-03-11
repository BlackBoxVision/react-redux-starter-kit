import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';


class RegisterForm extends React.Component {
	static propTypes = {
		handleLogin: PropTypes.func.isRequired
	};

	render() {
		return (
			<Card>
				<CardText>
					<form method="POST">
						<TextField floatingLabelText='Username' hintText='Username' fullWidth/>
						<TextField floatingLabelText='Password' hintText='Password' fullWidth/>
						<div>
							<FlatButton label='Login' onClick={this.props.handleLogin} primary/>
							<RaisedButton label='Register' type='submit' primary/>
						</div>
					</form>
				</CardText>
			</Card>
		)
	}
}

export default RegisterForm;