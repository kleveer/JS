'use strict';
// task #1
const readline  = require('readline-sync');
function inputArray() {
    let newArray = Number(readline.question('Input arryLenght: '));
    let array = [];
    for(let i =0; i <  newArray; i++) {
        while(true){
            let elementArray = Number(readline.question('Input array dimention: '));
            if(isNaN(elementArray)){
                console.log('вы  ввели не число!');
            }if(!Number.isInteger(elementArray)){
                console.log('Число дожно быть целым');
            }else {
                array.push(elementArray);
                break;
            }
    }    
}
return array;
}
// task №2
function maxInTheArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function minInTheArray(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function meanTwoDigit(arr) {
    let sum = 0;
    for (let i = 0; i<arr.length;i++) {
        let num = arr[i];
        if (num  >= 10 && num <=99){
            sum = sum + num;
        }
    }
    return sum / arr.length;

}
let myArr = inputArray();
console.log(minInTheArray(myArr));
console.log(maxInTheArray(myArr));
console.log(meanTwoDigit(myArr));