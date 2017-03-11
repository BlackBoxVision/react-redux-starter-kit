import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import Card from 'material-ui/Card/Card';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import withRouter from 'react-router/lib/withRouter';

import DashboardContainer from '../atoms/Layout/Container';


class Dashboard extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    state = {
        open: false
    };

    render() {
        return (
            <DashboardContainer backgroundColor="#FFAB91">
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
	                <div style={{ height: '175px', backgroundColor: "#FFAB91" }}>
		                <div style={{ padding: '20px' }}>
							<span>Hello</span>
		                </div>
	                </div>
                    <Menu>
                        <MenuItem primaryText='Account' value='account' onTouchTap={this.handleMenuItemTouch}/>
                    </Menu>
                </Drawer>
                <Card
                    style={{ margin: '20px', height: '100vh' }}
                    containerStyle={{ padding: '20px', height: '100vh' }}
                >
                    {this.props.children}
                </Card>
            </DashboardContainer>
        );
    }

	handleLogout = event => this.props.router.push('/login');

	handleMenuTouch = event => this.setState({ open: !this.state.open });

	handleMenuDrawer = open => this.setState({ open });

	handleMenuItemTouch = event => {
		this.props.router.push('/dashboard/account');
		this.handleMenuTouch(event);
	}
}

export default withRouter(Dashboard);