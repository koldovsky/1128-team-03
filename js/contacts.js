const contactsTitle = document.querySelector('.contacts__title');
contactsTitle.innerText = 'First Step!';

const greetings = [
      'Hello',
      'Olla',
      'Hey',
      'Yo',
];

contactsTitle.innerText = getRandomEl(greetings);
function getRandomEl(arr) {
    return arr[ Math.floor(Math.random() * arr.length)];
}

const clockContainer = document.querySelector('.contacts_clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString("uk")
}

setInterval(updateClock, 1000);