import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';

class WhatWeDo extends Component {
    render() {
        const { ...sectionProps } = this.props;

        return (
            <Section id='WhatWeDo' {...sectionProps}>
                <Flex align='center' justify='center' wrap>
                    <Box col={12} pt={2}>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

WhatWeDo.props = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    paddingTop: PropTypes.string
};

WhatWeDo.defaultProps = {
    backgroundColor: '#9C27B0'
};

export default WhatWeDo;