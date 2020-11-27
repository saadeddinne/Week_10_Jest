const axios = require("axios");

async function getContent(media) {
	if (media == "weather") {
		const weather = await axios.get(
			"http://api.openweathermap.org/data/2.5/weather?APPID=e156d61d05379392dc4e3b7d597a3e87&id=6325494&units=metric"
		);
		html =
			"<html><body> " +
			"Today the weather in:" +
			weather.data["name"] +
			"," +
			weather.data["sys"]["country"] +
			":" +
			"is " +
			weather.data["weather"][0]["description"] +
			", the Temperature is: " +
			weather.data["main"]["temp"] +
			"C" +
			" and feels like: " +
			weather.data["main"]["feels_like"];
		("</body>\r\n        </html>");

		// console.log(html);
		return html;
	} else if (media == "Exchange") {
		const exchange = await axios
			.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then((response) => (this.info = response.data.bpi));
		html =
			"<html><body></div>Bitcoin rate today: " +
			info.USD.description +
			" Rate: " +
			info.USD.rate +
			" and " +
			info.EUR.description +
			" Rate: " +
			info.EUR.rate +
			"</div></body></html>";
		console.log(html);
		return html;
	} else {
		return "Undefined media type";
	}
}

getContent("Exchange");
module.exports = getContent;
