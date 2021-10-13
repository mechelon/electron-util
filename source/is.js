'use strict';
const isUsingAsar = require('./is-using-asar');

module.exports = {
	macos: process.platform === 'darwin',
	linux: process.platform === 'linux',
	windows: process.platform === 'win32',
	main: process.type === 'browser',
	renderer: process.type === 'renderer',
	usingAsar: isUsingAsar,
	macAppStore: process.mas === true,
	windowsStore: process.windowsStore === true
};
