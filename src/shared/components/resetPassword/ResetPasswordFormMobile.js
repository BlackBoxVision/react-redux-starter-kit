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
				<TextField floatingLabelText='Email' hintText='Email' fullWidth/>
				<div>
					<FlatButton label='Login' onClick={this.props.handleLogin} primary/>
					<RaisedButton label='Recover Password' type='submit' primary/>
				</div>
			</form>
		)
	}
}

export default RegisterFormMobile;