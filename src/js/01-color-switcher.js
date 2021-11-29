console.log('color-switcher');
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}
let timerId = null;

console.log(refs.startBtn);
console.log(refs.stopBtn);

refs.stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBackgroundColor() {
    document.body.style.backgroundColor = `${getRandomHexColor()}`
}

refs.startBtn.addEventListener('click', startChangeColor)
refs.stopBtn.addEventListener('click', stopChangeColor)

function startChangeColor(e) {
    console.log('test');
    changeBodyBackgroundColor()
    timerId = setInterval(() => {
        changeBodyBackgroundColor()
        console.log(timerId);
    }, 1000)
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function stopChangeColor(e) {
    console.log('stop test');
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

console.log('test');
console.log('test');