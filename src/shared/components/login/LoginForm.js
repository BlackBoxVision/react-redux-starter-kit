import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import Form from '../common/Form';


class LoginForm extends React.Component {
	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
		handleRegister: PropTypes.func.isRequired,
		handlePasswordForget: PropTypes.func.isRequired
	}

	render() {
		const { handleSubmit, handleRegister, handlePasswordForget } = this.props;
		const styles = this.getStyles();

		return (
			<Card>
				<CardText>
					<Form method="POST" onSubmit={handleSubmit}>
						<TextField floatingLabelText='Username' hintText='Username' fullWidth/>
						<TextField floatingLabelText='Password' hintText='Password' fullWidth/>
						<div>
							<FlatButton label='Register' onClick={handleRegister} primary/>
							<FlatButton label='Forgot password?' onClick={handlePasswordForget} primary/>
							<RaisedButton label='Login' type='submit' primary/>
						</div>
					</Form>
				</CardText>
			</Card>
		);
	}

	getStyles = () => {
		return {
			cardContainer: {
				height: '225px'
			}
		}
	}
}

export default LoginForm;