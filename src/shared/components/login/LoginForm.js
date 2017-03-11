import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';


class LoginForm extends React.Component {
	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
		handleRegister: PropTypes.func.isRequired,
		handlePasswordForget: PropTypes.func.isRequired
	}

	render() {
		const { handleSubmit, handleRegister, handlePasswordForget } = this.props;

		return (
			<Card containerStyle={{ height: "75%" }}>
				<CardText>
					<form method="POST" onSubmit={handleSubmit}>
						<div>
							<TextField floatingLabelText='Username' fullWidth/>
						</div>
						<div>
							<TextField floatingLabelText='Password' fullWidth/>
						</div>
						<div>
							<FlatButton label='Register' onClick={handleRegister} primary/>
							<FlatButton label='Forgot password?' onClick={handlePasswordForget} primary/>
							<RaisedButton label='Login' type='submit' primary/>
						</div>
					</form>
				</CardText>
			</Card>
		);
	}
}

export default LoginForm;