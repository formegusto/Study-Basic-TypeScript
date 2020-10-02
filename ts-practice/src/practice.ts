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

function sum(x: number, y: number): number {
    return x + y;
};

sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current,0);
};

sumArray([1,2,3,4,5]);
