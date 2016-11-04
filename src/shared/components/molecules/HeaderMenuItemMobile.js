import React, {Component, PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon/FontIcon';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import Link from 'react-router/lib/Link';

var styles = {
    fontIcon: {
        marginRight: '10px'
    }
};

class HeaderMenuItemMobile extends Component {
    render() {
        const { iconName, text, linkTo } = this.props;

        const icon = (
            <FontIcon className='material-icons' style={styles.fontIcon}>
                {iconName}
            </FontIcon>
        );

        return (
            <MenuItem
                containerElement={<Link to={{pathname: '/', hash: linkTo}}/>}
                leftIcon={icon}
                primaryText={text.toUpperCase()}
            />
        );
    }
}

HeaderMenuItemMobile.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default HeaderMenuItemMobile;