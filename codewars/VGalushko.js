//Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return(laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}

//Return Negative
function makeNegative(num) {
    if (num > 0){
        num = num * -1;
    }
    return num;
}

//Grasshopper - Terminal game move function
function move (position, roll) {
    return (position + roll*2)
}

//Grasshopper - Personalized Message
function greet (name, owner) {
    if (owner == name) {
        return ('Hello boss');
    } else {
        return ('Hello guest');
    }
}

//Keep Hydrated!
function litres(time) {
    return Math.floor(time * 0.5);
}

//Opposites Attract
function lovefunc(flower1, flower2){
    return (
        (flower1 + flower2) % 2 === 0 ? false : true)
}

























