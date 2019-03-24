function test() {
			var div = document.getElementById('input');
			var div2 = document.getElementById('table');
			var body = document.getElementsByClassName('menu state');
			var experts = Number(div.childNodes[3].value);
			var alternativs = Number(div.childNodes[5].value);

			if (document.getElementById('table')) {
			} else {
				
				div2 = createTable(experts, alternativs);

				var button = document.createElement('button')
				button.textContent = 'Принять';
				div2.appendChild(button);
			
				button.addEventListener('click', function() {

					for (var i = 1; i < experts + 1; i++) {
						var tr = document.getElementById('input-form-' + i);
						var array = [];
						var newArray = [];

						for (var j = 1; j < alternativs + 1; j++) {
							array.push(Number(tr.childNodes[j].childNodes[0].value));
						}

						for (var z = 1; z < array.length + 1; z++) {
							var MAX = array.indexOf(Math.max.apply(null, array));
							newArray[MAX] = z;
							array[MAX] = 0;
						}

						

						console.log(newArray + '\n========');
					}
				});
			}
}


function createTable(experts, alternativs) {
	var div2 = document.createElement('div');
	// div2.id = 'table'
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
	
	div2.appendChild(table);
	document.body.getElementsByClassName('menu state')[0].appendChild(div2);
	return div2
}