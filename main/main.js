/*     Main-Test     */
function LCDNumber(number) {
	var dividedNumArr = getDividedNumArr(number);
	var LCDArrs = loadLCDArrs();
	var neededLCDArrs = getNeededLCDArrs(dividedNumArr, LCDArrs);
	var LCDInfo = getLCDInfo(neededLCDArrs);
	console.log(jointAndPrint(LCDInfo));
}
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
function getLCDInfo(neededLCDArrs) {
	var LCDInfo = [];
	for (var i = 0; i <= 2; i++) {
		var tempInfo = "";
		for (var j = 0; j < neededLCDArrs.length; j++) {
			tempInfo += neededLCDArrs[j].substring(i * 3, (i + 1) * 3);
			tempInfo += (j === neededLCDArrs.length - 1) ? "\n" : " ";
		}
		LCDInfo.push(tempInfo);
	}
	return LCDInfo;
}

/*     Task 4     */
function jointAndPrint(LCDInfo) {
	return LCDInfo[0] + LCDInfo[1] + LCDInfo[2];
}
