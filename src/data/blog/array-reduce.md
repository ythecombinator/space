---
title: 'Understanding Array.reduce(), JavaScript'
date: '2020-08-29'
tags: ['javascript', 'array']
draft: false
summary: 'An easy analogy to understand Array.reduce()'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

![Array Reduce](https://res.cloudinary.com/practicaldev/image/fetch/s--4CmAIMAF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/t2zz9h037txs866cbe2v.png)

Of the number of Array helper functions, the most confusing and rarely used is the `Array.reduce()` function.

Unlike the other Array helper methods such as `Array.map()` and `Array.forEach()` which takes a single function and processes the content of each element in an array and returns it, `Array.reduce()` does not.

`Array.reduce()` works like this, it **reduces** the array and returns a single result. It takes an initial value and a callback function and calls the function on the initial with the first element in the array and place the result somewhere and takes another element in the array and runs the function on it with the result and place the new result away. It does it for each individual element and return the final answer when there are no elements left.

## `Array.reduce(callback,initialValue)`

Taking the code example below

```javascript
// Assuming we have an array of numbers
const numbers = [1, 2, 3, 4];

// Then a function to add numbers with two parameters
// which returns the sum of two numbers
const addNumbers = (firstNum, secondNum) => {
  return firstNum + secondNum;
};

// We must set an initial value for the reduce() method.
const initialValue = 0;

// Then we use the reduce() helper method on the numbers array
const arrayTotal = numbers.reduce(addNumbers, initialValue);
console.log(arrayTotal); // 10
```

### How does it work?

Array helper methods have one thing in common, they perform some action to each element in the array. `Array.reduce` is no difference.

The `addNumbers` function we added as a callback takes two arguments. The first number and a second number and returns the sum. Now, when the reduce method starts, the first element of the array has is passed to the function, but the function needs two arguments to add. That's where the `initialValue` comes in. The `initialValue`, which is 0, is passed as the first argument and the first element of the array is passed as the second argument. The function runs and the returned results is now set as the new `initialValue` and passed as the first argument and the next array element is passed as the second argument. The function runs until there are no elements left and the final result is returned.

### Another Analogy

Take the header of this post. The chicken 🍗, popcorn 🍿 and burger 🍔 are taken into the body by calling the `eat` function and they are reduced into a single 💩 and returned by the body.
