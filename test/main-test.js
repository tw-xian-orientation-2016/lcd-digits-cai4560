describe('Main-Test: LCD a number', function() {
	describe('It Should print correct info', function() {
		it('when given a 5-bits input', function() {
			var input = "13579";
			spyOn(console, 'log');
			var expectResult =   "   " + " " + " _ " + " " + " _ " + " " + " _ " + " " + " _ " + "\n"
									 			+	 "  |" + " " + " _|" + " " + "|_ " + " " + "  |" + " " + "|_|" + "\n"
												+	 "  |" + " " + " _|" + " " + " _|" + " " + "  |" + " " + "  |" + "\n";
			LCDNumber(input);									
			expect(console.log).toHaveBeenCalledWith(expectResult);
		});
	});
});
