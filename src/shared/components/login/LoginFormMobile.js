import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import Form from '../common/html/Form';


class LoginFormMobile extends React.Component {
	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
		handleRegister: PropTypes.func.isRequired,
		handlePasswordForget: PropTypes.func.isRequired
	}

	render() {
		const { handleSubmit, handleRegister, handlePasswordForget } = this.props;

		return (
			<Form width="95%" method="POST" onSubmit={handleSubmit}>
				<TextField floatingLabelText='Username' hintText='Username' fullWidth/>
				<TextField floatingLabelText='Password' hintText='Password' fullWidth/>
				<div>
					<FlatButton label='Register' onClick={handleRegister} primary/>
					<FlatButton label='Forgot password?' onClick={handlePasswordForget} primary/>
					<RaisedButton label='Login' type='submit' primary/>
				</div>
			</Form>
		);
	}
}

export default LoginFormMobile;