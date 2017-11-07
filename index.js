import React from 'react';
import ReactDOM from 'react-dom';
require(__dirname + "/dist/styles.css")
//const app = require('express');

let seed = "La semilla";
console.log(seed);

class App extends React.Component {
	render(){
		return(
			<div>
				<h1>REACT DOM</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


