// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const buttonStart = document.querySelector('button[data-start');
const date = document.querySelector('#datetime-picker');
const daysTime = document.querySelector('[data-days');
const hoursTime = document.querySelector('[data-hours');
const minutesTime = document.querySelector('[data-minutes');
const secondsTime = document.querySelector('[data-seconds');

buttonStart.disabled = true;
let timer;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDate) {
        //console.log(selectedDates[0]);
        if (selectedDate[0] <= new Date()) {
            buttonStart.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            buttonStart.disabled = false;
            buttonStart.addEventListener('click', countdownTime);

            function countdownTime() {
                timer = setInterval(() => {
                    buttonStart.disabled = true;

                    const chooseDate = new Date(date.value.replace(/-/g, '/')).getTime();
                    const now = new Date().getTime();
                    const timeLapse = chooseDate - now;
                    const { days, hours, minutes, seconds } = convertMs(timeLapse);

                    daysTime.innerHTML = days < 10 ? addLeadingZero(days) : days;
                    hoursTime.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
                    minutesTime.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
                    secondsTime.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;

                    if (timeLapse < 1000) {
                        clearInterval(timer);
                        buttonStart.disabled = false;
                    }
                }, 1000);
            }
            function addLeadingZero(value) {
                const stringValue = String(value);
                return stringValue.padStart(2, '0');
            }
            function convertMs(ms) {
                // Number of milliseconds per unit of time
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;

                // Remaining days
                const days = Math.floor(ms / day);
                // Remaining hours
                const hours = Math.floor((ms % day) / hour);
                // Remaining minutes
                const minutes = Math.floor(((ms % day) % hour) / minute);
                // Remaining seconds
                const seconds = Math.floor((((ms % day) % hour) % minute) / second);

                return { days, hours, minutes, seconds };
            }

            console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
            console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
            console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  
        }
    }
};
flatpickr(date, options);