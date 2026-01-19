const readline = require('readline-sync');
let a = readline.question('Input a: ');
let b = readline.question('Input b: ');
let s = a*b;
if(s>500){
    console.log(s*0.9);
}else{
    console.log(s);
}