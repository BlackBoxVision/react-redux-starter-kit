import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import Form from '../../common/html/Form';


class RegisterFormMobile extends React.Component {
	static propTypes = {
		handleLogin: PropTypes.func.isRequired
	};

	render() {
		return (
			<Form width="95%" method="POST">
				<TextField floatingLabelText='Email' hintText='Email' fullWidth/>
				<div>
					<FlatButton label='Login' onClick={this.props.handleLogin} primary/>
					<RaisedButton label='Recover Password' type='submit' primary/>
				</div>
			</Form>
		)
	}
}

export default RegisterFormMobile;