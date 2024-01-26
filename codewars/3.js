// 1. Find the smallest integer in the array https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return (Math.min(...args))
    }
}

//Koniev Alex
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minNumber = args[0];
  
    args.map((number, i) => {
      if (number[0]) return;

      if(number < minNumber) {
        minNumber = number;
      }
    });
    
  return minNumber;
  }
}

//2. Geometry Basics: Circle Circumference in 2D https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return(circle.radius*2*3.1415926535)
}

//Koniev Alex
function circleCircumference(circle) {
if (!(circle instanceof Circle)
    || !(circle.center instanceof Point)
    || typeof circle.radius !== 'number') {
    throw new Error('Тут какая-то ошибка');
  }

  const circumference = 2 * Math.PI * circle.radius;

  return Math.round(circumference * 1e6) / 1e6;
}

//3. Training JS #12: loop statement --for..in and for..of https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
    const arr = [];
    for (let key in obj){
        if (key.length === 5) arr.push(key);
        if (obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

//Koniev Alex
function giveMeFive(obj){
  return Object.entries(obj).join(',').split(',').filter((el) => el.length == 5);
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

//Koniev Alex
function buildFun(n){

	const res = [];

  for (let i = 0; i < n; i++) {
    (function (index) {
      res.push(function () {
        return index;
      });
    })(i);
  }

  return res;
}
