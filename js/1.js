function plus() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 + num2;

	document.getElementById('out').innerHTML = result;
}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 - num2;

	document.getElementById('out').innerHTML = result;
}

function multiply() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 * num2;

	document.getElementById('out').innerHTML = result;
}

function divide() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);
	if (num2 == 0) {
		document.getElementById('out').innerHTML = "На ноль делить нельзя";
	} else {
		result = num1 / num2;
		document.getElementById('out').innerHTML = result;
	}

}