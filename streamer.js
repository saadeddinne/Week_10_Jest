const axios = require("axios");

async function getContent(type) {
	if (type == "weather") {
		const weather = await axios.get(
			"http://api.openweathermap.org/data/2.5/weather?APPID=e156d61d05379392dc4e3b7d597a3e87&id=6325494&units=metric"
		);
		console.log(
			"The weather in " +
				weather.data["name"] +
				" City," +
				weather.data["sys"]["country"] +
				":" +
				weather.data["weather"][0]["description"] +
				", the Temperature is: " +
				weather.data["main"]["temp"] +
				", feels like: " +
				weather.data["main"]["feels_like"] +
				"C"
		);
		return weather.data["main"]["temp"];
	}
}

getContent("weather");
