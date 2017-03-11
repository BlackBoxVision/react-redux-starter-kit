export default class Mobile {
	static is(regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile/i) {
		if (typeof navigator !== 'undefined') {
			return navigator && navigator.userAgent ? regex.test(navigator.userAgent) : false;
		}

		return false;
	};
}