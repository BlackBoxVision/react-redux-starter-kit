import React, {PropTypes} from 'react';

import RegisterForm from './RegisterForm';

import FlexContainer from '../../common/container/FlexContainer';


class RegisterView extends React.Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        isMobile: PropTypes.func.isRequired,
        isTablet: PropTypes.func.isRequired,
        isDesktop: PropTypes.func.isRequired,
        router: PropTypes.object.isRequired
    };

    render() {
	    const styles = this.getStyles();

	    return (
            <FlexContainer style={styles.container}>
                <RegisterForm
                    isMobile={this.props.isMobile}
                    handleLogin={this.handleLogin}
                />
            </FlexContainer>
        );
    }

	getStyles = () => ({
        container: {
            backgroundColor: this.props.isMobile() ? "white" : "#E0E0E0"
        }
	});

	handleLogin = event => this.props.router.push('/login');
}

export default RegisterView;