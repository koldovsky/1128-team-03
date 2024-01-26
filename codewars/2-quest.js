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
