import React, {PropTypes} from 'react';

const FlexContainer = ({ style = {}, children }) => (
	<div style={{
		...style,
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
	}}>
		{children}
	</div>
);

FlexContainer.propTypes = {
	style: PropTypes.object
}

export default FlexContainer;