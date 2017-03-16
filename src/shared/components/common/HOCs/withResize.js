import React from 'react';
import Mobile from '../../../utils/Mobile';


export default function withResize(ReactComponent) {
	return class ResizeEventListener extends React.Component {
		state = {
			width: 0,
			height: 0
		}

		componentDidMount() {
			this.handleResize();
			window.addEventListener('resize', this.handleResize)
		}

		render() {
			return (
				<ReactComponent
					width={this.state.width}
					height={this.state.height}
                    isMobile={this.isMobile}
                    isTablet={this.isTablet}
                    isDesktop={this.isDesktop}
					{...this.props}
				/>
			);
		}

		isMobile = () => Mobile.is() || this.state.width < 480;

		isTablet = () => Mobile.is() || this.state.width < 992;

		isDesktop = () => !Mobile.is();

		handleResize = () => this.setState({
			width: window.innerWidth || document.documentElement.clientWidth || body.clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight || body.clientHeight
		})
	}
}