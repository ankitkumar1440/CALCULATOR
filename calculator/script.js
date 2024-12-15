let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (buttonValue === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (buttonValue === 'log') {
            if (string !== "") {
                string = Math.log10(parseFloat(string));
                document.querySelector('input').value = string;
            }
        } else if (buttonValue === '√') {
            if (string !== "") {
                string = Math.sqrt(parseFloat(string));
                document.querySelector('input').value = string;
            }
        } else {
            console.log(e.target);
            string = string + buttonValue;
            document.querySelector('input').value = string;
        }
    });
});
