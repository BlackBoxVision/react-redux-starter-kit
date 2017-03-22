import React, {PropTypes} from 'react';
import withRouter from 'react-router/lib/withRouter';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Settings from 'material-ui/svg-icons/action/settings';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/social/person';


class AppBarMenu extends React.Component {
	static propTypes = {
		isTablet: PropTypes.bool.isRequired,
		isMobile: PropTypes.bool.isRequired,
		menuItems: PropTypes.array,
		image: PropTypes.string
	};

	static defaultProps = {
		menuItems: [
			{
				primaryText: 'Profile',
				value: '/dashboard/profile',
				leftIcon: <Person color="#757575"/>
			},
			{
				primaryText: 'Settings',
				value: '/dashboard/settings',
				leftIcon: <Settings color="#757575"/>
			},
			{
				primaryText: 'Logout',
				value: '/login',
				leftIcon: <Logout color="#757575"/>
			}
		]
	};

	render() {
		return (
			<IconMenu
				onItemTouchTap={this.onItemTouch}
				iconButtonElement={this.getIconButton()}
				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				targetOrigin={{horizontal: 'left', vertical: 'top'}}
			>
				{this.props.menuItems.map(this.renderMenuItem)}
			</IconMenu>
		);
	}

	renderMenuItem = (menuItem, index) => {
		return (
			<MenuItem
				key={`menu-item-${index}`}
				{...menuItem}
			/>
		)
	};

	onItemTouch = (event, child) => this.props.router.push(child.props.value);

	getIconButton = () => {
		let content = <MoreVert color="white"/>;

		if (!this.props.isMobile && !this.props.isTablet) {
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
	};

	getStyles = () => ({
		image: {
			width: "100%",
			height: "100%",
			marginBottom: "10px",
			borderRadius: "50%"
		}
	});
}

export default withRouter(AppBarMenu);