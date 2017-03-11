import React from 'react';

export default function withResize(ReactComponent) {
	return class ResizeEvenListener extends React.Component {
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
					{...this.props}
				/>
			);
		}

		handleResize = () => this.setState({
			width: window.innerWidth || document.documentElement.clientWidth || body.clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight || body.clientHeight
		})
	}
}