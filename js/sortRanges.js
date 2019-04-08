export function sortRanges(array) {
	var completeArray = [];
	var range = 1;

	while (range < array.length + 1) {
		var sortArray = [];
		var someChar = Number(0);

		for (var i = 0; i <  array.length; i++) {
			sortArray.push(array.indexOf(Math.max.apply(null, array), i));
		}
		sortArray = sortArray.filter(function(item, pos)  {
			if (item > -1) {
				return sortArray.indexOf(item) == pos;
			}
		})

		for (var k = 0; k<sortArray.length; k++) {
			someChar = someChar + range;
			range++;
		}

		someChar = someChar / Number(sortArray.length);

		for (var j=0; j < sortArray.length; j++) {
			completeArray[sortArray[j]] = someChar;
			array[sortArray[j]] = 0;
		}
	}
	return completeArray;
}