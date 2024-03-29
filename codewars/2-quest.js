//1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (string) => string.split(' ');

//Koniev Alex
function stringToArray(string){
  return string.split(" ");
}

//2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');

//Koniev Alex
function DNAtoRNA(dna) {
  const dnaArr = dna.split('');
 
  return dnaArr.map((el) => el === 'T' ? 'U' : el).join("");
}

//3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//Koniev Alex
const min = function(list){
  
  let minNumber = list[0];
  
  list.map((number, i) => {
    if (number[0]) return;
    
    if(number < minNumber) {
      minNumber = number;
    }
  });
    
  return minNumber;
}

const max = function(list){
  let maxNumber = list[0];
  
  list.map((number, i) => {
    if (number[0]) return;
    
    if(number > maxNumber) {
      maxNumber = number;
    }
  });
    
  return maxNumber;
}

//4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
const min = (arr, toReturn) => (toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr)));

//Koniev Alex
const minNumber = function(list){
  
  let minNumber = list[0];
  
  list.map((number, i) => {
    if (number[0]) return;
    
    if(number < minNumber) {
      minNumber = number;
    }
  });
    
  return minNumber;
}

function min(arr, toReturn) {
  if (toReturn === 'value') {
    return minNumber(arr);
  }else{
    return arr.indexOf(minNumber(arr));
  }
}

//5 https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

//Koniev Alex
function warnTheSheep(queue) {
 const wolfIndex = queue.indexOf("wolf");
    
    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        const sheepNumber = queue.length - 1 - wolfIndex;
        return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
    }
}

//6 https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

//Koniev Alex
function maps(numbers){
  return numbers.map((number) => number*2);
}

//7 https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

//Koniev Alex
function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
}
