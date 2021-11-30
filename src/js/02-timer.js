import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    selector: document.querySelector('input[type = "text"]'),
    startBtn: document.querySelector('button'),
    days: document.querySelectorAll('.field ')[0].children[0],
    hours: document.querySelectorAll('.field ')[1].children[0],
    minutes: document.querySelectorAll('.field ')[2].children[0],
    seconds: document.querySelectorAll('.field ')[3].children[0],
    video: document.querySelector('video'),
    timer: document.querySelector('.timer')
}
// console.log(refs.selector);
// console.log(refs.startBtn);
// console.log(refs.days);
console.log(refs.timer);

refs.startBtn.disabled = true;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        const date = new Date();
        const userDate = selectedDates[0];
        dateAlert(userDate, date)
        if (refs.startBtn.disabled === false) {
            const startTime = dateCompare(userDate, date)
            changeValues(startTime)
            refs.startBtn.addEventListener('click', () => {
                startTimer(startTime)
                refs.timer.classList.add('centered')
                refs.startBtn.disabled = true;
                refs.video.classList.remove('hidden')
            })
        }
    },
};

flatpickr(refs.selector, options)

function dateAlert(userDate, date) {
    console.log(`current date: ${date}`);
    console.log(`user date: ${userDate}`);
    if (date >= userDate) {
        return Notify.failure('Please choose a date in the future');
    }
    refs.startBtn.disabled = false;
}

function dateCompare(userDate, date) {
    console.log('compare');
    const differenceMs = userDate - date
    console.log(`time left in ms:  ${differenceMs}`);
    console.log("time left converted: " + JSON.stringify(convertMs(differenceMs)));
    changeValues(differenceMs)
    return differenceMs
}

function startTimer(ms) {
    const startTime = Date.now()
    const finishTime = startTime + ms
    console.log(`finish time: ${finishTime}`);
    let timer = setInterval(() => {
        const currentTime = Date.now()
        if (currentTime < finishTime) {
            const deltaTime = currentTime - startTime
            const timeLeft = finishTime - currentTime
            changeValues(timeLeft)
            console.log(currentTime);
            console.log(deltaTime);
        } else {
            clearInterval(timer)
            refs.video.classList.add('hidden')
            return Report.success(
                'Countdown is over!',
                '',
                'Okay',
                () => {
                    location.reload()
                }
            );
        }
    }, 1000)

}

function changeValues(ms) {
    const timeLeft = convertMs(ms)
    console.log(timeLeft);
    refs.days.innerText = timeLeft.days
    refs.hours.innerText = timeLeft.hours
    refs.minutes.innerText = timeLeft.minutes
    refs.seconds.innerText = timeLeft.seconds
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0')
}

// const date = new Date()
// console.log(typeof date, date);
// const dateString = date.toString()
// console.log(typeof dateString, dateString);
// console.log(new Date(0));
// console.log(date.getTime());

// const teamMeetingDate = new Date("March 16, 2030")
// console.log(teamMeetingDate);
// console.log(date.getMinutes());
// console.log(date.getHours());