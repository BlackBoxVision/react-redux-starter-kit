import React, {Component, PropTypes} from 'react'
import FooterList from '../atoms/FooterList';
import FooterListItem from '../atoms/FooterListItem';
import SocialFloatingButton from './SocialFloatingButton';

class FooterSocialList extends Component {
    render() {
        const { links } = this.props;

        return (
            <FooterList>
                {links.map(this.renderItem)}
            </FooterList>
        );
    }

    renderItem = (link, index) => (
        <FooterListItem key={`footer-list-item-${index}`}>
            <SocialFloatingButton
                linkTo={link.linkTo}
                fontIconClassName={`fa fa-${link.socialNetwork}`}
                floatingBackgroundColor={link.backgroundColor}
            />
        </FooterListItem>
    )
}

FooterSocialList.props = {
    links: PropTypes.array.isRequired
};

export default FooterSocialList;