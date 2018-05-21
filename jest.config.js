module.exports = {
	verbose: true,
	snapshotSerializers: ['enzyme-to-json/serializer'],
	moduleDirectories: ['node_modules'],
	transform: {
		"^.+\\.jsx?$": "babel-jest"
	},
	setupTestFrameworkScriptFile: './enzyme-setup.js',
};
