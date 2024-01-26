// 1. Find the smallest integer in the array https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return (Math.min(...args))
    }
}

//2. Geometry Basics: Circle Circumference in 2D https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return(circle.radius*2*3.1415926535)
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