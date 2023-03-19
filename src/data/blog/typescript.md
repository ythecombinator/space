---
title: 'Getting Started with TypeScript'
date: '2021-09-17'
tags: ['typescript']
draft: false
summary: 'TypeScript Basics for beginners'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

Typescript is an open-source object oriented programming language developed and maintained by Microsoft. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It's more like if JavsScript is raw coffee, TypeScript is coffee with milk, another coffee, just much better.

<div align="center">
<img src="/static/images/ts.png" alt="TypeScript Superset"  width="250"/>
</div>

In this post, we will take a basic overview of typescript as a whole and look more into the syntax in the next post.

In programming, there are two classes of programming languages used. Statically Typed Languages (variable types are known at compile times) and Dynamically Typed Languages (variable types are known at run time). JavaScript is dynamically types language, meaning that the type of a declared variable is known when the program is being run. Assuming you have a wrong variable type, you wouldn't know it until the program runs which is difficult for larger projects.
That's where typescript comes in, it is a statically typed language, meaning you will know all your wrong types during compile times, even before the program runs.

How TypeScript works is you write your typescript code stating and declaring the types and the typescript compiler will check first for errors, if none, it will then compile your code into javascript then you can use the javascript in your codebase without any errors.

To begin TypeScript, you need to install `typescript` globally on your computer using

```bash
npm install -g typescript
```

## JavaScript Types

There are eight (8) main types in JavaScript and TypeScript is based on these main types.

- `string`
- `number`
- `bigint`
- `boolean`
- `symbol`
- `undefined`
- `object`
- `function`

## Key Features

As I stated earlier, static typing is the foremost key feature for typescript.

Now to try TypeScript out, create a typescript file. A file ending with `.ts`. Example, `main.ts`

In your typescript file, `main.ts`, add the following.

```js:main.ts
console.log('Hello, TypeScript');
```

```bash
# Compile the `main.ts` to `main.js` using this command
tsc main.ts
```

Your `main.js` file will contain the compiled version of your typescript file, `main.ts`

```js:main.js
console.log('Hello, TypeScript');
```

### Variables

When you're declaring a variable in a TypeScript file, you either have to explicitly state the type of the variable to be declared, annotate the variable with the variable type or typescript will infer the variable type at run time based on the assigned value.

Let's declare a `status` variable in our `main.ts`.

```ts:main.ts
const status = 'available';
```

Compiling the `ts` file to javascript, we get something different. Also, we get no error at compile time because the compiler inferred the type of `status` as a `string` from the assigned value.

```js:main.js
var status = 'available';
```

By default, TypeScript compiles into ES5 JavaScript but this can be changed with a configuration file we will look at later on.
The `status` variable can be declared also stating the `type` of the variable. The syntax will be a colon after the variable name then the type before the assigned value.

```ts
// Syntax
const variableName: type = variable;
```

```ts:main.ts
const status: string = 'available';
// The same can be made for other types too
const numberOfBlogPosts: number = 7;
const isWorking: boolean = false;

// For Arrays, just add `[]` after the type
let temps: number[] = [80, 32, 34];
```

```js:main.js
// The compiled JavaScript from the TypeScript
var status = 'available';
var numberOfBlogPosts = 7;
var isWorking = false;
var temps = [80, 32, 34];
```

> When declaring a variable to later assign a value, the type must be stated.

```ts
let numberOfFollowers: number;
let doCatsPurr: boolean;

// When assigning a variable, the type of the variable should match the type declared or tsc will throw an error.
doCatsPurr = true; // No Problem
doCatsPurr = 'yes'; // Non-matching types. An error will be thrown
```

> Once a variable's type has been set or inferred you cannot assign to it a value of a different type

### Objects

For an object, the type of each property are stated and the property is required unless it is optional by a `?`

```ts:main.ts
const coordinates: { x: number; y: number } = {
  x: 1,
  y: 2,
};
```

`{ x: number; y: number }` above is the type for the `coordinates` object. If the value of `x` above is changed to a variable of different type, let's say a string, an error will be thrown by the compiler. If also a property in the avoided, an error will be thrown unless the property is set optional.

```ts:main.ts
const coordinates: { x: number; y: number } = {
  x: 'one', // An Error will be thrown for mismatched types
  y: 2,
};

const coordinates: { x: number; y: number } = {
  x: 1, // An Error will be thrown for missing property `y`
};

// Making an object property optional
const coordinates: { x: number; y?: number } = {
  x: 1, // No error will be thrown. `y` is optional.
};
```

For code reuseabilility and best practices, stating the type of an object everytime is not a good idea. We need to do some refactoring. Using the `interface` statement only provided by TypeScript, you can set the type of an object once and reuse it over and over again.

```ts:main.ts
interface Coordinates {
  x: number;
  y: number;
  z?: number; // Optional
}

// First Use
const blueCoordinates: Coordinates = {
  x: 4,
  y: 3,
  z: 5,
};

// Reusing the `interface` without stating the whole type again
const redCoordinates: Coordinates = {
  x: 6,
  y: 5,
};
```

### Functions

Type annotations are also used in function headers stating the types of each parameter, if the parameter is optional and also the return type.

```ts
// Function Declaration Type Syntax
function functionName(parameter: parameterType): returnType {}

const functionName = (parameter: parameterType) => {};
```

```ts:main.ts
// Untyped function declaration
const add = (x, y) => x + y;

// Adding types to the parameters
const add1 = (x: numbers, y: number) => x + y; // The return type will be inferred

// Stating the return type explicitily
const add2: (x: number, y: number) => number = (x, y) => x + y;

// The `(x: number, y: number) => number` can be refactored into a `type` using the `type` statement for reusability.
type Addition = (x: number, y: number) => number;
const add4: Addition = (x, y) => x + y;
```

> Note in Typescript all function parameters are required unless explicitly marked as optional using `?`

### So Why TypeScript?

TypeScript is an extensin to javascript that add's a lot of plethora of features to help developers:

- Write less buggy code
- Organize large codebases with modules
- Take advantage of IDE Functionality and features
- Generates backwards compactible JavaScript.

That's the end of the basic overview. I will write more blog posts to detail some of the features and syntax in typescript and how you can integrate it into your existing projects.
