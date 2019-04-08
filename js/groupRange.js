import * from './createTable'

function groupRange() {
			var div = document.getElementById('input');
			var body = document.getElementsByClassName('menu state');
			var experts = Number(div.childNodes[3].value);
			var alternativs = Number(div.childNodes[5].value);
			var columnSum = [];

			if (document.getElementById('table')) {
			} else {
				
				var div2 = createTable(experts, alternativs);
				div2.id = 'table';

				var button = document.createElement('button');
				button.id = 'result';

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
					var div3 = createTable(experts, alternativs, finishArray);
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
					var div4 = createTable(1, alternativs, totalSum);
					div4.id = 'totalSum';
					document.getElementById('totalSum').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML = 'Сумма рангов';
					document.getElementById('totalSum').childNodes[0].childNodes[0].childNodes[0].innerHTML = '';
					}		

				if (document.getElementById('totalRanges')) {
				} else {
					var totalSortRanges = [sortRanges(sortRanges(sum))];
					var div5 = createTable(1, alternativs, totalSortRanges);
					div5.id = 'totalRanges';
					document.getElementById('totalRanges').childNodes[0].childNodes[0].childNodes[0].innerHTML = '';
					document.getElementById('totalRanges').childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML = 'R';
				}			
				});


			}
}