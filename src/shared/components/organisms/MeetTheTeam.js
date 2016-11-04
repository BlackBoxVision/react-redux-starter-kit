import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';

class MeetTheTeam extends Component {
    render() {
        const { ...sectionProps } = this.props;

        return (
            <Section id='MeetTheTeam' {...sectionProps}>
                <Flex align='center' justify='center' wrap>
                    <Box col={12} pt={2}>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

MeetTheTeam.props = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    paddingTop: PropTypes.string
};

MeetTheTeam.defaultProps = {
    backgroundColor: '#673AB7'
};

export default MeetTheTeam;