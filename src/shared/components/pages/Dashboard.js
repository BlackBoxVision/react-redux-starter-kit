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

    handleMenuItemTouch = event => this.props.router.push('/dashboard/account');

    render() {
        const { children } = this.props;
        const { open } = this.state;
        const logoutButton = <FlatButton label='logout' onTouchTap={this.handleLogout}/>;

        return (
            <DashboardContainer>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleMenuTouch}
                    iconElementRight={logoutButton}
                />
                <Drawer
                    open={open}
                    containerStyle={{ marginTop: '65px' }}
                >
                    <List>
                        <ListItem primaryText='Account' onTouchTap={this.handleMenuItemTouch}/>
                    </List>
                </Drawer>
                <Card containerStyle={{ margin: '20px' }}>
                    {children}
                </Card>
            </DashboardContainer>
        );
    }
}

export default withRouter(Dashboard);