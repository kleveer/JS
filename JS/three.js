const readline  = require('readline-sync')
let n = Number(readline.question('Input n: '));
let s = 0;
let i = 1;
while(i<=n){
    console.log(s=s+i);
    console.log(i=i+2);
}
console.log(s);
// let n =9;
// let s =0;
// let i = 1;