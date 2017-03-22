import React, {PropTypes} from 'react';
import ResetPasswordView from '../view/ResetPassword';

import withRouter from 'react-router/lib/withRouter';
import withResize from '../../common/hocs/withResize';


@withRouter
@withResize
class ResetPasswordContainer extends React.Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		isMobile: PropTypes.func.isRequired,
		isTablet: PropTypes.func.isRequired,
		isDesktop: PropTypes.func.isRequired,
		router: PropTypes.object.isRequired
	};

	render() {
		return (
			<ResetPasswordView
				width={this.props.width}
				height={this.props.height}
				isMobile={this.props.isMobile}
				isTablet={this.props.isTablet}
				isDesktop={this.props.isDesktop}
				router={this.props.router}
			/>
		)
	}
}

export default ResetPasswordContainer;