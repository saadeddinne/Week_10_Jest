const getContent = require("./streamer");
describe("GetContent function", () => {
	test("it should return a valid data weather.", async () => {
		const weather = await getContent("weather");
		expect(weather).toBeDefined();
	});
	test("it should return a valid HTML (with weather).", async () => {
		const weather = await getContent("weather");
		expect(weather).toMatch(/<html>/);
	});

	// Bitcoin exchange Test
	test("it should return a valid data from Bitcoin API.", async () => {
		const bitcoin = await getContent("Exchange");
		expect(bitcoin).toBeDefined();
	});
	test("it should return a valid HTML (with Exchange).", async () => {
		const bitcoin = await getContent("Exchange");
		expect(bitcoin).toMatch(/<html>/);
	});
});
