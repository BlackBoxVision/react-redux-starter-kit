import React, {PropTypes} from 'react';


class NotFound extends React.Component {
    render() {
        return (
            <div style={{
		        display: 'flex',
		        flexDirection: 'column',
		        minHeight: '100vh',
		        alignItems: 'center',
		        justifyContent: 'center',
	        }}>
                Ups, seems you try to enter a route that doesn't exists
            </div>
        );
    }
}

export default NotFound;