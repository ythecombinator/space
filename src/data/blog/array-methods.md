---
title: '🤸‍♂️ JavaScript Array Methods Simplified'
date: '2020-08-31'
tags: ['javascript', 'array']
draft: false
summary: 'JavaScript Array methods cheatsheet'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

Probably anyone reading this knows what an array is but let's revise a bit.

#### What is a Array?

Simply, an array is a variable (a very special one) that holds more than one value. So you can keep an unlimited number of values in it and it is much helpful and easier to work with than declaring and assigning each variable all over again.

Array's can be created by `[]` with the elements seperated by `,` or if you want to be nerdy, you can use `new Array()`.

Let's get to why we are here. Array Methods.

# \* `.concat()`

The concat method is used to add two arrays as one.

```js:array-concat.js
let planets = ['Mars', 'Uranus', 'Venus'];
let newPlanet = ['Proxima Centauri B'];

planets.concat(newPlanet);
// ["Mars","Uranus","Venus","Proxima Centauri B"]
```

# \* `.join()`

The join method joins the elements of an array by a given string which it takes as the argument and returns the string value.

```js:array-join.js
let numbers = [1, 2, 3, 4];
numbers.join('.');
// "1.2.3.4"
```

# \* `.slice()`

The slice() method returns the selected elements in an array, as a new array object without changing the original array. It selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

```js:array-slice.js
let numbers = [1, 2, 3, 4, 5, 6];
numbers.slice(2, 4);
// [3,4]

console.log(numbers); // The original does not change
// [1,2,3,4,5,6]
```

# \* `.indexOf()`

It returns the index value of an element in an array.

```js:array-indexof.js
let alphas = ['a', 'b', 'c'];
alphas.indexOf('c');
// 2
```

# \* `.lastIndexOf()`

It returns the last index value of an element in an array if the same element repeats itself more than one.

```js:array-lastindexof.js
let alphas = ['a', 'b', 'b', 'b', 'c'];
alphas.lastIndexOf('b');
// 3
```

# \* `.reverse()`

It returns the array reversed.

```js:array-reverse.js
let alphas = ['a', 'b', 'c'];
alphas.reverse();
// ["c","b"',"a"]
```

# \* `.sort()`

The sort method is used to sort elements of the array alphabetically.

```js:array-sort.js
let alphas = ['d', 'y', 'c'];
let digits = [23, 5, 11];
alphas.sort();
// ["c","d","y"]

digits.sort();
// [11,23,5]
```

# \* `.shift()`

The shift method removes the first element of the array shifts the values at consecutive indexes down, then returns the removed value.

```js:array-shift.js
const digits = [1, 2, 3, 4];

const shiftArray = digits.shift();
// digits = [2,3,4]
// shiftArray = 1
```

# \* `.unshift()`

The unshift method adds new items to the beginning of an array and returns the new length.

```js:array-unshift.js
const digits = [1, 2, 3, 4];

const unshiftArray = digits.unshift('a');
// digits = ["a",1,2,3,4]
// unshiftArray = 5
```

# \* `.pop()`

The pop method removes the last element of an array and returns the element removed.

```js:array-pop.js
const digits = [1, 2, 3, 4];

const popArray = digits.pop();
// digits = [1,2,3]
// popArray= 1
```

# \* `.push()`

The opposite of the unshift method. The push method adds new items to the end of an array and returns the new length.

```js:array-push.js
const digits = [1, 2, 3, 4];

const pushArray = digits.push('a');
// digits = [1,2,3,4,"a"]
// pushArray = 5
```

# \* `.splice()`

The splice method replaces the element in an array from one position to another and returns the element that was replaced.

```js:array-splice.js
const digits = [1, 2, 3, 4];

const spliceArray = digits.splice(1, 2, 'a');
// digits = [1,"a",4]
// spliceArray = [2,3]
```
