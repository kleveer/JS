// let a = 10;
// while(a){
//     console.log(a**2);
//     a--;
// }
// let b = 10;
// do{
//     console.log(b**2);
//     b--;
// }while(b);

// for(let i = 10;i>0 ;i--){
//     console.log(i**2);
// }
// task 1
let startNumber = 1;
let multiplier = 4;
let quantity = 7;
for(let i = 1; i<quantity;i++){
    let result = startNumber *= multiplier;
    console.log(result);
} 
// task 2
// let lastNumber = 10;
// let sum = 0;
// for(let n =1;n<=lastNumber;n++){
//     sum+=n;
//     console.log(sum);
// }
// task 3
let lastNumber = 5;
let multiplicationResult = 1;
for(let n =1; n<=lastNumber;n++){
    if(n%2===0){
        multiplicationResult *=n;
    }
}
console.log(multiplicationResult);