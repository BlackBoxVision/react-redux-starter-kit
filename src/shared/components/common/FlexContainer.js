import React, {PropTypes} from 'react';

const FlexContainer = ({ style = {}, children }) => (
	<div style={{
		...style,
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	}}>
		{children}
	</div>
);

FlexContainer.propTypes = {
	style: PropTypes.object,
	children: PropTypes.any
}

export default FlexContainer;