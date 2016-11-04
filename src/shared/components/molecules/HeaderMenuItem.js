import React, {Component, PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon/FontIcon';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import browserHistory from 'react-router/lib/browserHistory';

var styles = {
    flatButton: {
        color: 'white',
        height: '64px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    fontIcon: {
        marginRight: '10px'
    }
};

class HeaderFlatButton extends Component {
    render() {
        const { iconName, text } = this.props;

        const icon = (
            <FontIcon className='material-icons' style={styles.fontIcon}>
                {iconName}
            </FontIcon>
        );

        return (
            <FlatButton
                labelPosition='before'
                icon={icon}
                style={styles.flatButton}
                onTouchTap={this.handleTouchTap}
                primary
            >
                {text.toUpperCase()}
            </FlatButton>
        );
    }

    handleTouchTap = (event) => {
        const { linkTo } = this.props;
        browserHistory.push({pathname: '/', hash: linkTo});
    };
}

HeaderFlatButton.props = {
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default HeaderFlatButton;