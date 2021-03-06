import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import DashboardContainer from '../../common/container/Container';

import DrawerHeader from './DrawerHeader';
import AppBarMenu from './AppBarMenu';


class DashboardView extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
	    width: PropTypes.number.isRequired,
	    height: PropTypes.number.isRequired,
	    isMobile: PropTypes.func.isRequired,
	    isTablet: PropTypes.func.isRequired,
	    isDesktop: PropTypes.func.isRequired,
	    router: PropTypes.object.isRequired
    };

    state = {
        open: !this.props.isMobile()
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
	                containerStyle={styles.drawer}
	                onRequestChange={this.handleMenuDrawer}
                    docked={!(this.props.isMobile() || this.props.isTablet())}
                >
	                {this.shouldRenderDrawerHeader()}
                    <List>
                        <ListItem primaryText='Account' value='account' onTouchTap={this.handleMenuItemTouch}/>
                    </List>
                </Drawer>
                <Card style={styles.card} containerStyle={styles.cardContainer}>
                    {this.props.children}
                </Card>
            </DashboardContainer>
        );
    }

    getIconElementRight = () => {
    	return (
    		<AppBarMenu isMobile={this.props.isMobile()} isTablet={this.props.isTablet()}/>
	    );
    };

    shouldRenderDrawerHeader = () => {
    	if (this.props.isMobile() || this.props.isTablet()) {
    		return (
			    <DrawerHeader/>
		    );
	    }

	    return false;
    };

    getStyles = () => ({
        card: {
            marginTop: this.props.isMobile() || this.props.isTablet() ? '0px' : '20px',
            marginBottom: this.props.isMobile() || this.props.isTablet() ? '0px' : '20px',
            marginRight: this.props.isMobile() || this.props.isTablet() ? '0px' : '20px',
            marginLeft:  this.props.isMobile() || this.props.isTablet() ? '0' : this.state.open && this.props.width > 992 ? '280px' : '20px',
            height: this.props.isMobile() || this.props.isTablet() ? 'calc(100vh - 64px)' : 'calc(100vh - 104px)',
        },
        cardContainer: {
            padding: '20px',
        },
        drawer: {
            marginTop: this.props.isMobile() || this.props.isTablet() ? '0px' : '64px'
        }
    });

	handleMenuTouch = event => this.setState({ open: !this.state.open });

	handleMenuDrawer = open => this.setState({ open });

	handleMenuItemTouch = event => {
		this.props.router.push('/dashboard/profile');

		if (this.props.isMobile() || this.props.width < 992) {
			this.handleMenuTouch(event);
		}
	};
}

export default DashboardView;