function test() {
			var div = document.getElementById('input');
			var div2 = document.getElementById('table');
			var body = document.getElementsByClassName('menu state');

			if (div2) {
				document.removeChild(div2);
			} else {
				var div2 = document.createElement('div');
				div2.id = 'table'
				var table = document.createElement('table');
				var input = document.createElement('input');
				input.type = 'number';
				// input.min = 1;
				// input.max = 100,
				// input.step = 1;

				for (var i = 0; i < Number(div.childNodes[3].value)+1; i++) {
				var row = table.insertRow(i);
				row.width = 50;
			
				for (j = 0; j < Number(div.childNodes[5].value)+1; j++) {
					var cell = row.insertCell(j);
					cell.width = 50;
					cell.appendChild(input);
					// cell.innerHTML = '<input type="number" min="1" max="100" step="1" class="input">'
					if (j === 0 && i === 0) {
						cell.innerHTML = '<p></p>';
					}
					else if (j > 0 && i === 0) {
						cell.innerHTML = '<p>А'+(i+1)+'</p>';
					}
					else if (i > 0 && j === 0) {
						cell.innerHTML = '<p>Э'+(j+1)+'</p>';
					}
				}
			}
			
			div2.appendChild(table);
			document.body.getElementsByClassName('menu state')[0].appendChild(div2);
		}
		// var button = document.createElement('button')
		// button.textContent = 'Принять';
		// button.onclick = button();
		// div2.appendChild(button);

}

function button() {
	
}