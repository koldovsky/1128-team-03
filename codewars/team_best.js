// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//1 Messi Goals
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//2 Return Negative
function makeNegative(num) {
  if (num > 0) {
    num = num * -1;
  }
  return num;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//3 Game Move
function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//4 Grasshopper - Personalized Message
function greet(name, owner) {
  if (owner === name) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//5 Keep Hydrated
function litres(time) {
  return Math.floor(time * 0.5);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//6 Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 0 ? false : true;
}
