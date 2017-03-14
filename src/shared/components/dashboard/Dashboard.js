import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import withRouter from 'react-router/lib/withRouter';

import Mobile from '../../utils/Mobile';
import DashboardContainer from '../common/Container';
import withResize from '../common/withResize';
import DrawerHeader from './DrawerHeader';
import AppBarMenu from './AppBarMenu';


class Dashboard extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    state = {
        open: Mobile.is() || this.props.width < 480 ? false : true
    };

    render() {
    	const styles = this.getStyles();

        return (
            <DashboardContainer backgroundColor="#E0E0E0">
                <AppBar
	                title='My Awesome App'
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                    iconElementRight={this.getIconElementRight()}
                />
                <Drawer
                    open={this.state.open}
	                containerStyle={styles.drawerStyle}
	                onRequestChange={this.handleMenuDrawer}
                    docked={Mobile.is() || this.props.width < 480 ? false : true}
                >
	                {this.shouldRenderDrawerHeader()}
                    <List>
                        <ListItem primaryText='Account' value='account' onTouchTap={this.handleMenuItemTouch}/>
                    </List>
                </Drawer>
                <Card style={styles.cardStyle} containerStyle={styles.cardContainerStyle}>
                    {this.props.children}
                </Card>
            </DashboardContainer>
        );
    }

    getIconElementRight = () => {
    	return (
    		<AppBarMenu isMobile={Mobile.is() || this.props.width < 480}/>
	    );
    }

    shouldRenderDrawerHeader = () => {
    	if (Mobile.is() || this.props.width < 480) {
    		return (
			    <DrawerHeader/>
		    );
	    }

	    return false;
    }

    getStyles = () => {
    	const { width } = this.props;
    	const { open } = this.state;

    	return {
		    cardStyle: {
			    marginTop: Mobile.is() || width < 480 ? '0px' : '20px',
			    marginBottom: Mobile.is() || width < 480 ? '0px' : '20px',
			    marginRight: Mobile.is() || width < 480 ? '0px' : '20px',
			    marginLeft:  Mobile.is() || width < 480 ? '0' : open && width > 992 ? '280px' : '20px',
			    height: Mobile.is() || width < 480 ? '100vh' : '86%',
		    },
		    cardContainerStyle: {
			    padding: '20px',
			},
		    drawerStyle: {
	    		marginTop: Mobile.is() || width < 480 ? '0px' : '64px'
		    }
	    }
    }

	handleMenuTouch = event => this.setState({ open: !this.state.open });

	handleMenuDrawer = open => this.setState({ open });

	handleMenuItemTouch = event => {
		this.props.router.push('/dashboard/profile');

		if (Mobile.is() || this.props.width < 480) {
			this.handleMenuTouch(event);
		}
	}
}

export default withRouter(withResize(Dashboard));