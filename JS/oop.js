const user = {
    name : 'Pashok',
    birth: 2005,
    sayHello: function() {
    console.log('Привет! меня зовут ' + this.name);
}
}

user.sayHello();
function User(name, birth) {
     this.name = name;
     this.birth = birth;
     this.isAdmin = false;
     this.sayHello = function() {
    console.log('Привет! меня зовут ' + this.name);
     }
}
let user1 = new User('Вася', 2005);
console.log(user1.name, user1.birth);