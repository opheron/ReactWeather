var React = require("react");
var {Link} = require("react-router");

var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>This app uses <Link to="https://facebook.github.io/react/">React</Link> and the <Link to="https://openweathermap.org/api">OpenWeatherMap API</Link>.</p>
			<p>Check out the <Link to="https://github.com/opheron/ReactWeather">Github repo</Link>.</p>
		</div>
	)
};

module.exports = About;