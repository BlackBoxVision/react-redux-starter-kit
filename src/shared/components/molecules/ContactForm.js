import React, {Component, PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import CardActions from 'material-ui/Card/CardActions';
import CardTitle from 'material-ui/Card/CardTitle';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class ContactForm extends Component {
    render() {
        return (
            <Card containerStyle={{ padding: '20px' }}>
                <CardTitle title='Do you got a project in mind? Contact Us!'/>
                <CardText>
                    <form onSubmit={() => {}}>
                        <TextField name='fullName' floatingLabelText='Full Name' fullWidth/>
                        <TextField name='email' floatingLabelText='Email' fullWidth/>
                        <TextField name='subject' floatingLabelText='Subject' fullWidth/>
                        <TextField name='message' floatingLabelText='Message' rows={4} rowsMax={4} multiLine fullWidth/>
                    </form>
                </CardText>
                <CardActions>
                    <RaisedButton type='submit' backgroundColor='#3F51B5' labelColor='#FFFFFF' label='Submit'/>
                </CardActions>
            </Card>
        );
    }
}

export default ContactForm;