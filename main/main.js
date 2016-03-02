/*     Task 1     */
function getDividedNumArr(number) {
	var dividedNumArr = [];
	for (var i = 0; i < number.length; i++) {
		dividedNumArr.push(parseInt(number[i]));
	}
	return dividedNumArr;
}

/*     Task 2     */
function getNeededLCDArrs(dividedNumArr, LCDArrs) {
	var neededLCDArrs = [];
	for (var i = 0; i < dividedNumArr.length; i++) {
		neededLCDArrs.push(LCDArrs[dividedNumArr[i]]);
	}
	return neededLCDArrs;
}

/*     Task 3     */
