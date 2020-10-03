"use strict";
// let count = 0;
// count += 1;
// // count = '갑자기 분위기 문자열'; 에러 발생!
// const message: string = 'hello world';
// const done: boolean = true;
// const numbers: number[] = [1,2,3];
// const messages: string[] = ['hello', 'world'];
// // message.push(1); 에러발생!
// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;
// let color: 'red' | 'orange' | 'yellow' = 'red';
// color = 'yellow';
// // color = 'green'; 에러발생!
// function sum(x: number, y: number): number {
//     return x + y;
// };
// sum(1, 2);
// function sumArray(numbers: number[]): number {
//     return numbers.reduce((acc, current) => acc + current,0);
// };
// sumArray([1,2,3,4,5]);
// function returnNothing(): void {
//     console.log('I am just saying hello world');
// };
// interface Shape {
//     getArea(): number;
// }
// class Circle implements Shape {
//     constructor(private radius: number) {
//         this.radius = radius;
//     }
//     getArea() {
//         return this.radius * this.radius * Math.PI;
//     }
// }
// class Rectangle implements Shape {
//     constructor(private width: number, private height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
// shapes.forEach(shape => {
//     console.log(shape.getArea());
// });
// interface Person {
//     name: string;
//     age?: number; // 물음표가 들어간 것은, 설정을 해도 되고 안해도 되는 값이라는 것
// }
// interface Developer extends Person{
//     skills: string[];
// }
// const person: Person = {
//     name: '김사랑',
//     age: 20 // 굳이 설정안해줘도 에러가 나지 않았다.
// };
// const expert: Developer = {
//     name: "김개발",
//     skills: ['javascript','react']
// };
// const people: Person[] = [person, expert];
// type Person = {
//     name: string;
//     age?: number;
// };
// // &는 Intersection으로서 두개 이상의 타입들을 합쳐준다.
// type Developer = Person & {
//     skills: string[];
// };
// const person: Person = {
//     name: '김사랑'
// };
// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };
// type People = Person[];
// const people: People = [person, expert];
// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];
// function merge<A, B>(a: A, b: B): A & B {
//     return {
//         ...a,
//         ...b
//     };
// }
// const merged = merge({foo:1}, {bar:1});
// console.log(merged);
// function wrap<T>(param: T) {
//     return {
//         param
//     }
// }
// const wrapped = wrap(10)
// interface Items<T> {
//     list: T[];
// }
// const items: Items<string> = {
//     list: ['a','b','c']
// };
// type Items<T> = {
//     list: T[]
// };
// const items: Items<string> = {
//     list: ['a','b','c']
// };
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.enqueue(0);
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
numberQueue.enqueue(4);
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());
