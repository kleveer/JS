// class Animal  {
//     constructor(name) {
//         this.name = name
//     }
//     eat(meal) {
//         this.meal = meal;
//         console.log('Я ем ' + this.meal);
//     }
// }
// class Bear extends Animal{
//     constructor(name, weight, speed) {
//         super(name);
//         this.weight = weight;
//         this.speed = speed;
//     }   
//     run(speed) {
//         console.log(`Медведь бежит со скорость ${this.speed} км/ч и вешу ${this.weight} кг.`);
//     }
// }
// let bear = new Bear("Медведь", 400, 80);
// bear.eat('Мясо');
// bear.run();

// task #2
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(){
        this.x += this.x;
        this.y += this.y;
        console.log('Фигура переместилась ');
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    perimeter() {
        return 'Периметр равен: ' + (this.width + this.height) *2;
    }
}
let rect = new Rectangle(10, 12);
console.log(rect.perimeter());
class Square extends Rectangle {
    constructor(lenght) {
        super();
        this.lenght = lenght;
    }
    perimeter() {
        return 'Периметр равен: ' + (this.lenght) * 4;
    }
}
let square = new Square(5);
console.log(square.perimeter());
class Circle extends Shape{
    constructor(redius) {
        super();
        this.redius = redius;
    }
    area() {
        return 'Площадь круга: ' + (3.14 * this.redius**2);
    }
}
let circle = new Circle(5);
console.log(circle.area());