import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import Card from 'material-ui/Card/Card';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import withRouter from 'react-router/lib/withRouter';

import Mobile from '../../utils/Mobile';
import DashboardContainer from '../common/Container';
import withResize from '../common/withResize';


class Dashboard extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    state = {
        open: false
    };

    render() {
    	const styles = this.getStyles();

        return (
            <DashboardContainer backgroundColor="#E0E0E0">
                <AppBar
	                title='My Awesome App'
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                    iconElementRight={<FlatButton label='logout' onTouchTap={this.handleLogout}/>}
                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={this.handleMenuDrawer}
                >
	                <div style={styles.headerStyle}>
		                <div style={styles.headerTextStyle}>
							<span>Hello</span>
		                </div>
	                </div>
                    <Menu>
                        <MenuItem primaryText='Account' value='account' onTouchTap={this.handleMenuItemTouch}/>
                    </Menu>
                </Drawer>
                <Card style={styles.cardStyle} containerStyle={styles.cardContainerStyle}>
                    {this.props.children}
                </Card>
            </DashboardContainer>
        );
    }

    getStyles = () => {
	    return {
	    	headerStyle: {
			    height: '175px',
			    backgroundColor: "#673AB7"
		    },
		    headerTextStyle: {
	    		padding: '20px'
		    },
		    cardStyle: {
			    margin: Mobile.is() || this.props.width < 480 ? '0px' : '20px',
			    height: Mobile.is() || this.props.width < 480 ? '91%' : '86%'
		    },
		    cardContainerStyle: {
			    padding: '20px'
		    }
	    }
    }

	handleLogout = event => this.props.router.push('/login');

	handleMenuTouch = event => this.setState({ open: !this.state.open });

	handleMenuDrawer = open => this.setState({ open });

	handleMenuItemTouch = event => {
		this.props.router.push('/dashboard/account');
		this.handleMenuTouch(event);
	}
}

export default withRouter(withResize(Dashboard));