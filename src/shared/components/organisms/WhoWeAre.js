import React, {Component, PropTypes} from 'react'
import Flex from 'reflexbox/dist/Flex';
import Box from 'reflexbox/dist/Box';
import Section from '../atoms/Section';
import WhoWeAreDescription from '../atoms/WhoWeAreDescription';

class WhoWeAre extends Component {
    render() {
        const { description, ...sectionProps } = this.props;

        return (
            <Section id='WhoWeAre' {...sectionProps}>
                <Flex align='center' justify='center' wrap>
                    <Box col={12} pt={2}>
                        <WhoWeAreDescription>
                            {description}
                        </WhoWeAreDescription>
                    </Box>
                </Flex>
            </Section>
        );
    }
}

WhoWeAre.props = {
    description: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    paddingTop: PropTypes.string
};

WhoWeAre.defaultProps = {
    description: 'BlackBox Vision came up as an idea to put different knowledge together and conform a variety stack of technology solutions company.We are three advanced engineering students which are                        worried about nowadays software problematics and want to put their maximum effort to get along                    with the clients giving them a solution according to their needs.Our vision is that not only time                 matters but also the quality of the product. We try to provide well-designed solutions which                      guarantee the software to apply for the different quality attributes such as scalability, maintainability, efficiency, usability and fault tolerance, among others.Our main ambition is to                  make people be interested in our work and earn their trust. You should know about our talent. So, don’t hesitate to contact us. Your question is the main priority.',
    backgroundColor: '#E91E63'
};

export default WhoWeAre;