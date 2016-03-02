describe('Task 1: GetDividedtArr', function() {
	describe('It should return correct DividedtArr',function() {
		it('when given a 10-bits input', function() {
			var input = "9876543210";
			var expectResult = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			var result = getDividedNumArr(input);
			expect(result).toEqual(expectResult) ;
		});
	});
});
