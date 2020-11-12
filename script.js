let calculator_keys = document.getElementsByClassName('btn');
let output = document.getElementById('output');
for (var i = 0; i < calculator_keys.length; i++) {
	let key = calculator_keys[i];
	key.addEventListener('mouseup', function () {
		calculateFunc(key.value);
		// console.log(key.value);
	});
}

document.addEventListener('keypress', function (event) {
	let keyValue = event.key;
	console.log('key press ' + keyValue + ', code ' + event.code);
	if (keyValue === 'Enter') {
		keyValue = '=';
	}
	calculateFunc(keyValue);
});

function calculateFunc(keyValue) {
	if (keyValue === 'c') {
		console.log('clear');
		output.value = 0;
	} else if (keyValue === 'backspace') {
		console.log('backspace');
		if (output.value.length === 1) {
			output.value = 0;
			return;
		}
		output.value = output.value.substring(0, output.value.length - 1);
	} else if (
		!isNaN(keyValue) ||
		RegExp(/[\(\)]/).test(keyValue) ||
		RegExp(/[\.]/).test(keyValue) ||
		RegExp(/[\+\-\*\/]/).test(keyValue)
	) {
		console.log('others');
		output.value === '0'
			? (output.value = keyValue)
			: (output.value += keyValue);
	} else if (keyValue === '=') {
		console.log('compute');
		let result = eval(output.value);
		output.value = result;
	}
}

// function calculateFunc(keyValue) {
// 	let screenContent = screen.textContent;
// 	if (keyValue === 'Backspace') {
// 		console.log('delete 1 char');
// 		if (screenContent.length === 1) {
// 			screen.textContent = 0;
// 			return;
// 		}
// 		screen.textContent = screenContent.substring(0, screenContent.length - 1);
// 	} else if (keyValue === 'c' || keyValue === 'C') {
// 		console.log('clear');
// 		screen.textContent = 0;
// 	} else if (keyValue === '=') {
// 		console.log('compute');
// 		let result = eval(screenContent);
// 		if (Number.isFinite(result)) {
// 			screen.textContent = result;
// 		} else {
// 			throw new Error();
// 		}
// 	} else if (!isNaN(keyValue) || RegExp(/[()]/).test(keyValue)) {
// 		console.log('number');
// 		if (screenContent === '0') {
// 			screen.textContent = keyValue;
// 		} else {
// 			screen.textContent += keyValue;
// 		}
// 	} else if (keyValue === '.') {
// 		console.log('decimal');
// 		screen.textContent += keyValue;
// 	} else if (RegExp(/[+\-\/\*]/).test(keyValue)) {
// 		console.log('operator');
// 		if (keyValue === '-' && screenContent === '0') {
// 			screen.textContent = '-';
// 		} else screen.textContent += keyValue;
// 	}
// }
