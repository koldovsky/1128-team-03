let factAbout;
async function giveMeFact() {
    const animal = document.querySelector('.products__currency').value;
    if (animal === "CAT") {
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        factAbout = await response.json();
        const fact = factAbout.text;
        document.querySelector("body > section > div.fact-body").innerHTML = fact;
        document.querySelector("body > section > div.fact-title").innerHTML = "ABOUT CAT:";
    } else {   
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
        factAbout = await response.json();
        const fact = factAbout.data[Math.floor(Math.random() * 10)]['attributes']['description'];
        document.querySelector("body > section > div.fact-body").innerHTML = fact;
        document.querySelector("body > section > div.fact-title").innerHTML = "ABOUT DOG:";
    }     
}

const factButton = document.querySelector("body > section > button.fact-button")

factButton.addEventListener('click', giveMeFact);

