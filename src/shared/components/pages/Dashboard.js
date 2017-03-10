import React, {Component, PropTypes} from 'react';
import { AppBar, Drawer, Card, FlatButton, List, ListItem } from 'material-ui';
import { withRouter } from 'react-router';
import DashboardContainer from '../atoms/Dashboard/DashboardContainer';

class Dashboard extends Component {
    static propTypes = {
        children: PropTypes.array.isRequired
    };

    state = {
        open: false
    };

    handleLogout = event => this.props.router.push('/login');

    handleMenuTouch = event => this.setState({ open: !this.state.open });

    handleMenuDrawer = open => this.setState({ open });

    handleMenuItemTouch = event => {
        this.props.router.push('/dashboard/account');
        this.handleMenuTouch(event);
    }

    render() {
        return (
            <DashboardContainer>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                    iconElementRight={
                        <FlatButton label='logout' onTouchTap={this.handleLogout}/>
                    }
                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={this.handleMenuDrawer}
                >
                    <List>
                        <ListItem primaryText='Account' onTouchTap={this.handleMenuItemTouch}/>
                    </List>
                </Drawer>
                <Card
                    style={{ margin: '10px', height: '100vh' }}
                    containerStyle={{ padding: '20px', height: '100vh' }}
                >
                    {this.props.children}
                </Card>
            </DashboardContainer>
        );
    }
}

export default withRouter(Dashboard);