function test() {
			var div = document.getElementById('input');
			// var div2 = document.getElementById('table');
			var body = document.getElementsByClassName('menu state');
			var experts = Number(div.childNodes[3].value);
			var alternativs = Number(div.childNodes[5].value);
			var columnSum = [];

			if (document.getElementById('table')) {
			} else {
				
				div2 = createTable(experts, alternativs);
				div2.id = 'table'

				var button = document.createElement('button')
				button.textContent = 'Принять';
				div2.appendChild(button);
			
				button.addEventListener('click', function() {
					var finishArray = [];

					for (var i = 1; i < experts + 1; i++) {
						var tr = document.getElementById('input-form-' + i);
						var array = [];
						var newArray = [];

						for (var j = 1; j < alternativs + 1; j++) {
							array.push(Number(tr.childNodes[j].childNodes[0].value));
						}
						finishArray.push(sortRanges(array));
					}

				if (document.getElementById('newTable')) {
				} else {
					div3 = createTable(experts, alternativs, finishArray);
					div3.id = 'newTable';
					}

				sum = finishArray.reduce(function (r, a) {
					a.forEach(function (b, i) {
						r[i] = (r[i] || 0) + b;
					});
					return r;
				}, []);

				var totalSum = [sum];
				if (document.getElementById('totalSum')) {
				} else {
					div4 = createTable(1, alternativs, totalSum);
					div4.id = 'totalSum';
					document.getElementById('totalSum').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML = 'Сумма рангов';
					document.getElementById('totalSum').childNodes[0].childNodes[0].childNodes[0].innerHTML = '';
					}		

				if (document.getElementById('totalRanges')) {
				} else {
					var totalSortRanges = [sortRanges(sortRanges(sum))];
					div5 = createTable(1, alternativs, totalSortRanges);
					div5.id = 'totalRanges';
					document.getElementById('totalRanges').childNodes[0].childNodes[0].childNodes[0].innerHTML = '';
					document.getElementById('totalRanges').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML = 'R';
				}			
				});


			}
}

function createTable(experts, alternativs, values) {
	var divBlock = document.createElement('div');
	var table = document.createElement('table');
	

	for (var i = 0; i < experts+1; i++) {
	var row = table.insertRow(i);
	row.width = 50;
	row.id = 'input-form-'+i;
	
		for (j = 0; j < alternativs+1; j++) {
			var cell = row.insertCell(j);

			if (j === 0 && i === 0) {
				cell.innerHTML = '<p></p>';
			}
			else if (j > 0 && i === 0) {
				cell.innerHTML = '<p>А'+j+'</p>';
			}
			else if (i > 0 && j === 0) {
				cell.innerHTML = '<p>Э'+i+'</p>';
				cell.width = 75;
			}
			else {
				if (values) {
					cell.innerHTML = values[i-1][j-1];
					cell.width = 50;
				}
				else {
					var input = document.createElement('input');

					input.type = 'number';
					cell.appendChild(input);
					input.min = 1;
					input.max = 100;
					input.step = 1;
					// input.className = 'input-form';
				}
			}
		}
	}
	
	divBlock.appendChild(table);
	document.body.getElementsByClassName('menu state')[0].appendChild(divBlock);
	return divBlock
}

function sortRanges(array) {
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