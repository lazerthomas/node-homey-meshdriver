'use strict';

const util = require('./../../../../util');

module.exports = {
	set: 'goToLiftPercentage',
	setParser(value) {

		// This boolean can be used to determine if incoming report are generated by a set command by Homey or externally
		this._reportDebounceEnabled = true;
		const mappedValue = util.mapValueRange(0, 1, 100, 0, value);
		return {
			percentageliftvalue: Math.round(mappedValue), // Round, otherwise might not be accepted by device
		};
	},
	get: 'currentPositionLiftPercentage',
	reportParser(value) {
		if (value => 0 && value <= 100) {
			return util.mapValueRange(0, 100, 1, 0, value);
		}
		return null;
	},
	report: 'currentPositionLiftPercentage',
	getOpts: {
		getOnStart: true,
	},
};