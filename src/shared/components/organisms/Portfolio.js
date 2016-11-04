import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';

class Portfolio extends Component {
    render() {
        const { ...sectionProps } = this.props;

        return (
            <Section id='Portfolio' {...sectionProps}>
                <Flex align='center' justify='center' wrap>
                    <Box col={12} pt={2}>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

Portfolio.props = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    paddingTop: PropTypes.string
};

Portfolio.defaultProps = {
    backgroundColor: '#3F51B5'
};

export default Portfolio;