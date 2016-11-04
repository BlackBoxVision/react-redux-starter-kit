import React, {Component, PropTypes} from 'react'
import IconButton from 'material-ui/IconButton/IconButton';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderMenuItem from '../molecules/HeaderMenuItemMobile';

class HeaderMenuMobile extends Component {
    render() {
        const { links } = this.props;

        let iconButton = (
            <IconButton style={{ marginTop: '8px' }}>
                <MenuIcon color='white'/>
            </IconButton>
        );

        return (
            <HeaderContainer>
                <IconMenu
                    iconButtonElement={iconButton}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    animated
                >
                    {links.map(this.renderItem)}
                </IconMenu>
            </HeaderContainer>
        );
    }

    renderItem = (link, index) => <HeaderMenuItem key={`header-menu-item-${index}-mobile`} {...link}/>
}

HeaderMenuMobile.props = {
    links: PropTypes.array.isRequired
};

export default HeaderMenuMobile;