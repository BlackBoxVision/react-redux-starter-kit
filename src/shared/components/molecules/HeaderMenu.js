import React, {Component, PropTypes} from 'react'
import HeaderContainer from '../atoms/HeaderContainer';
import HeaderMenuItem from './HeaderMenuItem';

class HeaderMenu extends Component {
    render() {
        const { links } = this.props;

        if (links) {
            return (
                <HeaderContainer>
                    {links.map(this.renderItem)}
                </HeaderContainer>
            );
        }

        return <HeaderContainer/>;
    }

    renderItem = (link, index) => <HeaderMenuItem key={`header-menu-item-${index}`} {...link}/>;
}

HeaderMenu.props = {
    links: PropTypes.array.isRequired
};

export default HeaderMenu;