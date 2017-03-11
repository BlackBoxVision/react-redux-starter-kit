import React, {PropTypes} from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';

import NotFoundContainer from '../common/Container';
import FlexContainer from '../common/FlexContainer';

import Mobile from '../../utils/Mobile';


class NotFound extends React.Component {
    render() {
        return (
        	<NotFoundContainer backgroundColor={!Mobile.is() ? "#E0E0E0" : "white"}>
	            <FlexContainer>
		            <Card>
			            <CardText>
				            Ups, seems you try to enter a route that doesn't exists
			            </CardText>
		            </Card>
	            </FlexContainer>
	        </NotFoundContainer>
        );
    }
}

export default NotFound;