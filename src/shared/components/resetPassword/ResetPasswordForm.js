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
			<Card containerStyle={{ height: "75%" }}>
				<CardText>
					<form method="POST">
						<div>
							<TextField floatingLabelText='Email' fullWidth/>
						</div>
						<div>
							<FlatButton label='Login' onClick={this.props.handleLogin} primary/>
							<RaisedButton label='Recover Password' type='submit' primary/>
						</div>
					</form>
				</CardText>
			</Card>
		)
	}
}

export default RegisterForm;