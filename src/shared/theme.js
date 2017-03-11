import {
	deepPurple500, deepPurple700,
	indigoA200,
	grey100, grey300, grey400, grey500,
	white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: deepPurple500,
		primary2Color: deepPurple500,
		primary3Color: grey400,
		accent1Color: indigoA200,
		accent2Color: grey100,
		accent3Color: grey500,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade(darkBlack, 0.3),
		pickerHeaderColor: deepPurple500,
		clockCircleColor: fade(darkBlack, 0.07),
		shadowColor: fullBlack,
	},
};