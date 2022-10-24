//JS Loops Exercise

//Exercise 1

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//Exercise 2

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Exercise 3
//For exercise 3, repeat both exercise 1 and 2 as while and do/while loop solutions.
let i = 1;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
  i++;
}

let r = 1;
do {
  if (r % 2 === 0) {
    console.log(r + " is even");
  } else {
    console.log(r + " is odd");
  }
  r++;
} while (r <= 100);

let l = 1;
while (l <= 100) {
  if (l % 3 === 0 && l % 5 === 0) {
    console.log("FizzBuzz");
  } else if (l % 3 === 0) {
    console.log("Fizz");
  } else if (l % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(l);
  }
  l++;
}

let j = 1;
do {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }
  j++;
} while (j <= 100);

//Exercise 4

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    break;
  } else if (i === n) {
    console.log("Did not find value");
  }
}

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let k = start; k <= m; k++) {
  if (k % fizzDivisor === 0 && k % buzzDivisor === 0) {
    console.log("FizzBuzz");
  } else if (k % fizzDivisor === 0) {
    console.log("Fizz");
  } else if (k % buzzDivisor === 0) {
    console.log("Buzz");
  } else {
    console.log(k);
  }
}
