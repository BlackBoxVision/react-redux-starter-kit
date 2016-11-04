import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';
import ContactForm from '../molecules/ContactForm';
import withWidth, { Responsive } from '../../utils/withWidth';

class Contact extends Component {
    render() {
        let { width, ...sectionProps } = this.props;
        let boxProps = {
            pt: (width <= Responsive.TABLET)? 5 : 3,
            p: (width <= Responsive.TABLET)? 1 : 6,
            mt: 4
        };

        return (
            <Section id='Contact' {...sectionProps}>
                <Flex align='center' justify='center' wrap>
                    <Box col={12} sm={1} md={3} lg={3}/>
                    <Box col={12} sm={12} md={6} lg={6} {...boxProps}>
                        <ContactForm/>
                    </Box>
                    <Box col={12} sm={1} md={3} lg={3}/>
                </Flex>
            </Section>
        );
    }
}

Contact.props = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

Contact.defaultProps = {
    backgroundColor: '#2196F3',
    backgroundImage: 'https://images.contentful.com/lwht5a8170mc/1fcaauUZJ2S8eyu2cwqQwo/4cda9968521f1ac51abd64bbbaaca909/contact.jpeg'
};

export default withWidth(Contact);