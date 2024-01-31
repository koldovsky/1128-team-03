
const clockContainer = document.querySelector('.contacts_clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString("uk")
}

setInterval(updateClock, 1000);