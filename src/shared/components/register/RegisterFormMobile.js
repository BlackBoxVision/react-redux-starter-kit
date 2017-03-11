import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';


class RegisterFormMobile extends React.Component {
	static propTypes = {
		handleLogin: PropTypes.func.isRequired
	};

	render() {
		return (
			<form method="POST">
				<div>
					<TextField floatingLabelText='Username' fullWidth/>
				</div>
				<div>
					<TextField floatingLabelText='Password' fullWidth/>
				</div>
				<div>
					<FlatButton label='Login' onClick={this.props.handleLogin} primary/>
					<RaisedButton label='Register' type='submit' primary/>
				</div>
			</form>
		)
	}
}

export default RegisterFormMobile;