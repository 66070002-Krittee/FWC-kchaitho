const leftInput = document.getElementById('left');
const rightInput = document.getElementById('right');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('btn');

function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

submitBtn.addEventListener('click', function () {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);
    const op = operatorSelect.value;

    if ((op === '/' || op === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert('Please, use me...');
}, 30000);