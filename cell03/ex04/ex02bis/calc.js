$(document).ready(function () {
    setInterval(function () {
        alert('Please, use me...');
    }, 30000);

    $('#btn').click(function () {
        const leftVal = $('#left').val().trim();
        const rightVal = $('#right').val().trim();

        if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
            alert('Error :(');
            return;
        }

        const num1 = parseInt(leftVal, 10);
        const num2 = parseInt(rightVal, 10);
        const op = $('#operator').val();

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
});