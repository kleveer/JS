// task 1
let age = 6;
let ageGroup = (age<=1) ? 'котята' : (age>1 && age<=3) ? 'Молодые коты' : (age>3 && age<=7) ? 'коты средних лет' : 'Почетные коты';
// if(age<=1){
//     ageGroup = 'котята';
// }else if(age>1 && age<=3){
//     ageGroup = 'Молодые коты';
// }else if(age>3 && age<=7){
//     ageGroup = 'Коты средних лет';
// }else if(age>7){
//     ageGroup = 'Почтенные коты';
// }
// console.log(ageGroup);

// task 2
let weight = 5;
let recommendation;
if(weight<4){
    recommendation = 'Пора перекусить';
}else if(weight>4 && weight<5.5){
    recommendation = 'Вес в норме';
}else  if(weight>5.5){
    recommendation = 'Пора на тренировку';
}
console.log(recommendation);
// task 3
let number =20;
let taskResult;
if(number%3==0 && number%5==0){
    taskResult = 'FizzBuzz';
}
if(number%3==0){
    taskResult = 'fizz';
}if(number%5==0){
    taskResult = 'buzz';
}if(number%3==0 && number%5==0){
    taskResult = 'FizzBuzz';
}
console.log(taskResult);
// task 4
const readline  = require('readline-sync');
let m = Number(readline.question('Input m: '));
let n = Number(readline.question('Input n: '));
let a = Number(readline.question('Input a: '));
let b = Number(readline.question('Input b: '));
let c = Number(readline.question('Input c: '));
let x =m;
y=a*m**m+b*x+c
if(x==m  && y==n){
    console.log(`Да пройдет`);
}else{
    console.log('нет');
}