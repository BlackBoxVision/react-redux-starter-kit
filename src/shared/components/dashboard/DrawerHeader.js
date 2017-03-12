import React, {PropTypes} from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';


class DrawerHeader extends React.Component {
	static propTypes = {
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		image: PropTypes.string
	};

	static defaultProps = {
		username: 'Admin',
		email: 'admin@example.com'
	};

	render() {
		const styles = this.getStyles();

		return (
			<div style={styles.headerContainer}>
				<div style={styles.headerTextContainer}>
					{this.getImageView()}
					<h3 style={styles.headerText}>
						{this.props.username}
					</h3>
					<p style={styles.headerText}>
						{this.props.email}
					</p>
				</div>
			</div>
		)
	}

	getImageView = () => {
		const styles = this.getStyles();

		if (this.props.image) {
			return <img src={this.props.image} style={styles.headerImage}/>
		}

		return <AccountCircle color="white" style={styles.headerImage}/>;
	}

	getStyles = () => {
		return {
			headerContainer: {
				height: '140px',
				width: 'auto',
				backgroundColor: "#673AB7"
			},
			headerTextContainer: {
				padding: '15px',
				color: 'white'
			},
			headerImage: {
				width: "60px",
				height: "60px",
				marginBottom: "10px",
				borderRadius: "50%"
			},
			headerText: {
				margin: '0px',
				padding: '0px'
			}
		}
	}
}

export default DrawerHeader;