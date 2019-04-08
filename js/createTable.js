function createTable(experts, alternativs, values) {
	var divBlock = document.createElement('div');
	var table = document.createElement('table');
	

	for (var i = 0; i < experts+1; i++) {
	var row = table.insertRow(i);
	row.width = 50;
	row.id = 'input-form-'+i;
	
		for (var j = 0; j < alternativs+1; j++) {
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