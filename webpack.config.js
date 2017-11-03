//webpack.config.js
const path = require('path');

const CONFIG = {
	"entry": "./index.js",
	"output": {
		"path": path.resolve(__dirname, "dist"),
		"filename": "bundle.js"
	},
	"module": {
    "loaders" : [
      {
        "test": /\.css$/,
        "loader": "style-loader!css-loader"
      },
      {
        "test": /\.js$/,
        "loader": "babel-loader",
        "exclude": /node_modules/,
        "query": {
          "presets": ["es2015"]
        }
      }
    ]
  }
}

module.exports = CONFIG;