let green = false
let yellow = false

function onClickGreen() {

	console.log("green")

	green = !green;
	if (green) {
		yellow = false
		document.body.style.backgroundColor = "green"
		document.getElementById("gun-burger").style.borderColor = "black"
	} else {
		document.body.style.backgroundColor = "white"
	}
	
}

function onClickYellow() {

	console.log("yellow")
	yellow = !yellow
	if (yellow) {
		green = false
		document.getElementById("gun-burger").style.borderColor = "blue"
		document.body.style.backgroundColor = "yellow"
	} else {
		document.getElementById("gun-burger").style.borderColor = "black"
		document.body.style.backgroundColor = "white"
	}
}

function onClickHello() {
	document.getElementById("hello").innerHTML += "hello "
}
