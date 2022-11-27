// Task 1

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} is zero`);
    } else if (i % 2 !== 0) {
        console.log(`${i} is odd number`);
    } else {
        console.log(`${i} is even number`);
    }
}

// Task 2

const newArray = [1, 2, 3, 4, 5, 6, 7];
newArray.splice(3, 2);
console.log(newArray);

// Task 3

function fillRandomArray(arrayLength) {
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        randomArray[i] = Math.round((Math.random() * 10));
    }
    return randomArray;
}

const arrayArray = fillRandomArray(5);
console.log(arrayArray);

// Get the sum
let arraySum = 0;
for (let i = 0; i < arrayArray.length; i++) {
    arraySum += arrayArray[i];
}

console.log(`The sum of array elements is ${arraySum}.`);

// Find the min number
let min = arrayArray[0];

for (let i = 0; i < arrayArray.length; i++) {
    if (arrayArray[i] < min) {
        min = arrayArray[i];
    }
}

console.log(`The min number in array is ${min}.`);

// Find the number 3 in array
let flag = 0;
for (let i = 0; i < arrayArray.length; i++) {
    if (arrayArray[i] === 3) {
        flag = 1;
    }
}

if (flag === 1) {
    console.log('There is number 3 in the array.');
} else {
    console.log('There is no number 3 in the array.');
}

// Task 4

function fillRandomArray(arrayLength) {
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        randomArray[i] = Math.round((Math.random() * 10));
    }
    return randomArray;
}

const array = fillRandomArray(10);
console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`The square of number ${array[i]} is ${array[i] ** 2}`);
    } else if (array[i] % 3 === 0) {
        console.log(`The cube of number ${array[i]} is ${array[i] ** 3}`);
    }
}

// Task 5

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        count++;
    }
}

console.log(`The number of digit 3 is ${count}`);

// Task 6

let oneMoreArray = [1, 2, 3, 4, 5];
oneMoreArray.splice(1, 2);
console.log(oneMoreArray);

// Task 7

let figure = '';

for (let i = 1; i <= 20; i++) {
    console.log(figure += 'x');
}