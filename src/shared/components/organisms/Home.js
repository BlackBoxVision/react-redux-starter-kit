import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';
import HomeTitle from '../atoms/HomeTitle';
import HomeSubtitle from '../atoms/HomeSubtitle';

class Home extends Component {
    render() {
        const { title, subtitle, ...sectionProps } = this.props;

        return (
            <Section id="Home" {...sectionProps}>
                <Flex align="center" justify="center" wrap>
                    <Box col={12}>
                        <HomeTitle>
                            {title}
                        </HomeTitle>
                        <HomeSubtitle>
                            {subtitle}
                        </HomeSubtitle>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

Home.props = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    paddingTop: PropTypes.string.isRequired
};

Home.defaultProps = {
    title: "Let's make your projects come true",
    subtitle: 'Let us make the hardest part for you and get the product you were looking for',
    backgroundColor: '#F44336',
    backgroundImage: 'https://images.contentful.com/lwht5a8170mc/w3FDlOYi6yCwsGu6EkQu/792767747799e3091c757da781993b75/slide.jpeg',
    paddingTop: '64px'
};

export default Home;