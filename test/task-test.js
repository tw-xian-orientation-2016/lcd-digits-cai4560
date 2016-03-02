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

describe('Task 2: GetNeededLCDArrs', function() {
	describe('It should return correct NeededLCDArrs',function() {
		it('when given 5-bit NumArr', function() {
			var input = [1, 3, 5, 7, 9];
			var expectResult = ["     |  |",
													" _  _| _|",
													" _ |_  _|",
													" _   |  |",
													" _ |_|  |"];
			var LCDArrs = loadLCDArrs();
			var result = getNeededLCDArrs(input, LCDArrs);
			expect(result).toEqual(expectResult);
		});
	});
});

describe('Task 3: GetLCDInfo', function() {
	describe('It should return correct LCDInfo',function() {
		it('when given 5-bit NumArr', function() {
			var input = ["     |  |", " _  _| _|", " _ |_  _|",
													" _   |  |", " _ |_|  |"];
			var expectResult = ["   " + " " + " _ " + " " + " _ " + " " + " _ " + " " + " _ " + "\n",
													"  |" + " " + " _|" + " " + "|_ " + " " + "  |" + " " + "|_|" + "\n",
													"  |" + " " + " _|" + " " + " _|" + " " + "  |" + " " + "  |" + "\n"
												];
			var result = getLCDInfo(input);
			expect(result).toEqual(expectResult) ;
		});
	});
});

describe('Task 4: Joint And Print', function() {
	describe('It should print correct Info',function() {
		it('when given 5-bit NumArr', function() {
			var input = ["   " + " " + " _ " + " " + " _ " + " " + " _ " + " " + " _ " + "\n",
									 "  |" + " " + " _|" + " " + "|_ " + " " + "  |" + " " + "|_|" + "\n",
													"  |" + " " + " _|" + " " + " _|" + " " + "  |" + " " + "  |" + "\n"
									];
			var expectResult =   "   " + " " + " _ " + " " + " _ " + " " + " _ " + " " + " _ " + "\n"
									 			+	 "  |" + " " + " _|" + " " + "|_ " + " " + "  |" + " " + "|_|" + "\n"
												+	 "  |" + " " + " _|" + " " + " _|" + " " + "  |" + " " + "  |" + "\n";
			var result = jointAndPrint(input);
			expect(result).toEqual(expectResult) ;
		});
	});
});
