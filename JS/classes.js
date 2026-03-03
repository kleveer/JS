// class User{
//     #name = 'Pashok';
//     #birth;
//     constructor(name, birth) {
//         this.name = name;
//         this.birth = birth;
//     }
//     sayHello() {
//     console.log('Привет! меня зовут ' + this.name);
//     }
// }
// let user = new User('Павел', 2006);
// console.log(user.name);
// user.sayHello();
// Задание №1
//  const animal = [
//      ['лев', 80 , 'Мясо'],
//      ['Волк', 60, 'Мясо'],
//      ['Гепард', 110, 'Мясо'],
//      ['Северный олень', 70, 'Грибы'],
//      ['Жираф', 60, 'Трава'],
// ]

// class Animal {
//     constructor(name, speed, food) {
//         this.name = name;
//         this.speed = speed;
//         this.food = food;
//         this.run = function() {
//             return ('Меня зовут ' + this.name + ' у меня скорость ' + this.speed);
//         }
//         this.eat = function() {
//             return ('Меня зовут ' + this.name + ' я ем ' + this.food);
//         }
//     }
// }
// let newObj = [];
// for(let i = 0; i < animal.length; i++) {
//     newObj.push(new Animal(animal[i][0], animal[i][1], animal[i][2]));
// }
// for(let i = 0; i < animal.length; i++){
//     console.log(newObj[i].name);
//     console.log(newObj[i].run());
//     console.log(newObj[i].eat());
// }
// Задание №2
// const readline = require('readline-sync');
// class Calculator {
//     constructor(){
//         this.read = function() {
//             this.a = Number(readline.question('Input a: '));
//             this.b = Number(readline.question('Input b: '));
//         }
//         this.sum = function() {
//             return this.a + this.b;
//         }
//         this.mul = function() {
//             return this.a * this.b;
//         }
//         this.pow = function() {
//             return this.a ** this.b;
//         }
//     }
// }
// let calculator = new Calculator();
// calculator.read();
// console.log('Sum=' + calculator.sum() );
// console.log('Mul=' + calculator.mul() );
// console.log('Pow=' + calculator.pow() );
// Задание №3
class Ladder {
    constructor() {
        this.step = 0;
        this.up = function(n){
            this.step += n;
            return this.step;
        }
        this.down = function(n) {
            this.step -= n;
            return this.step;
        }
        this.showStep = function() {
            console.log(this.step)
            return this.step;
        }
}
}
let ladder = new Ladder();
ladder.up(5);

ladder.showStep(); 

ladder.down(4);

ladder.showStep();