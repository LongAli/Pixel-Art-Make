var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");
// When size is submitted by the user, call makeGrid()


color.addEventListener("click", function(){});

function makeGrid() {
	for (var r = 0; r < height.value; r++){
		const row = canvas.insertRow(r);
		for (var c = 0; c < width.value; c++){
			const column = row.insertCell(c);
			column.addEventListener("click", fill);
		}
	}
}

function clearGrid() {
	while (canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
}

function fill(){
	this.setAttribute("style", `background-color: ${color.value}`);
}

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};