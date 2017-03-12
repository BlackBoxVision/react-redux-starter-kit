import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';


class AppBarMenu extends React.Component {
	static propTypes = {
		isMobile: PropTypes.bool.isRequired,
		image: PropTypes.string
	};

	render() {
		return (
			<IconMenu
				onItemTouchTap={this.onItemTouch}
				iconButtonElement={this.getIconButton()}
				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				targetOrigin={{horizontal: 'left', vertical: 'top'}}
			>
				<MenuItem primaryText="Profile" value="/dashboard/profile"/>
				<MenuItem primaryText="Settings" value="/dashboard/settings"/>
				<MenuItem primaryText="Logout" value="/login"/>
			</IconMenu>
		);
	}

	onItemTouch = (event, child) => this.props.router.push(child.props.value);

	getIconButton = () => {
		let content = <MoreVert color="white"/>;

		if (!this.props.isMobile) {
			const styles = this.getStyles();

			if (this.props.image) {
				content = <img src={this.props.image} style={styles.image}/>;
			} else {
				content = <AccountCircle color="white" style={styles.image}/>;
			}
		}

		return (
			<IconButton>
				{content}
			</IconButton>
		)
	}

	getStyles = () => {
		return {
			image: {
				width: "60px",
				height: "60px",
				marginBottom: "10px",
				borderRadius: "50%"
			}
		}
	}
}

export default withRouter(AppBarMenu);