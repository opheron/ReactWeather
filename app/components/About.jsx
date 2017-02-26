var React = require("react");
var {Link} = require("react-router");

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This app uses <a href="https://facebook.github.io/react/">React</a> and the <a href="https://openweathermap.org/api">OpenWeatherMap API</a>.</p>
			<p>Check out the <a href="https://github.com/opheron/ReactWeather">Github repo</a>.</p>
		</div>
	)
};

module.exports = About;