window.answered = false;

function addToStream(char) {
    let stream = document.querySelector('.calculatorDisplay');
    if (window.answered == true) {
        stream.innerHTML = '';
        window.answered = false;
    }
    stream.append(char);

};

function equals() {
    let display = document.querySelector('.calculatorDisplay');
    var stream = display.innerHTML;
    console.log(stream);
    answer = eval(stream);
    console.log(`${stream} = ${answer}`)
    display.innerHTML = `${stream} = ${answer}`;
    window.answered = true;
}

function clearDisplay() {
    let display = document.querySelector('.calculatorDisplay');
    display.innerHTML = `Cleared.`;
    window.answered = true;
}