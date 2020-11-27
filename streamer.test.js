describe("GetContent function", () => {
	test("it should return a valid data weather.", () => {
		const weather = getContent("weather");
		expect(weather).toBeDefined();
	});
});
