import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import withRouter from 'react-router/lib/withRouter';

import DashboardContainer from '../common/container/Container';
import withResize from '../common/HOCs/withResize';

import DrawerHeader from './DrawerHeader';
import AppBarMenu from './AppBarMenu';


class Dashboard extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    state = {
        open: this.props.isMobile() ? false : true
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
                    docked={this.props.isMobile() ? false : true}
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
    		<AppBarMenu isMobile={this.props.isMobile()}/>
	    );
    }

    shouldRenderDrawerHeader = () => {
    	if (this.props.isMobile()) {
    		return (
			    <DrawerHeader/>
		    );
	    }

	    return false;
    }

    getStyles = () => ({
        card: {
            marginTop: this.props.isMobile() ? '0px' : '20px',
            marginBottom: this.props.isMobile() ? '0px' : '20px',
            marginRight: this.props.isMobile() ? '0px' : '20px',
            marginLeft:  this.props.isMobile() ? '0' : this.state.open && this.props.width > 992 ? '280px' : '20px',
            height: this.props.isMobile() ? 'calc(100vh - 64px)' : 'calc(100vh - 104px)',
        },
        cardContainer: {
            padding: '20px',
        },
        drawer: {
            marginTop: this.props.isMobile() ? '0px' : '64px'
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

export default withRouter(withResize(Dashboard));