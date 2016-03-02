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
			if(j === neededLCDArrs.length - 1) {
				tempInfo += "\n";
			}
			else {
				tempInfo += " ";
			}
		}
	LCDInfo.push(tempInfo);
	}
	return LCDInfo;
}
