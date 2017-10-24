//webpack.config.js
const path = require('path');

const CONFIG = {
	"entry": "./index.js",
	"output": {
		"path": path.resolve(__dirname, "dist"),
		"filename": "bundle.js"
	}
}

module.exports = CONFIG;