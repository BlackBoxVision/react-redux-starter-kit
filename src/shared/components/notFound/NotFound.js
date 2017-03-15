import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';

import FlexContainer from '../common/container/FlexContainer';
import Mobile from '../../utils/Mobile';


class NotFound extends React.Component {
    render() {
    	const styles = this.getStyles();

        return (
	        <FlexContainer style={styles.container}>
		        <Card>
			        <CardText>
				        Ups, seems you try to enter a route that doesn't exists
			        </CardText>
		        </Card>
	        </FlexContainer>
	    );
    }

    getStyles = () => {
    	return {
    		container: {
			    backgroundColor: !Mobile.is() ? "#E0E0E0" : "white"
		    }
	    }
    }
}

export default NotFound;