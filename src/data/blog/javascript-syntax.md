---
title: 'Create Your Own JavaScript Syntax'
date: '2020-11-25'
tags: ['javascript', 'node', 'ast']
draft: false
summary: 'An overview of how to create your own JavaScript Syntax'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

Today we are going to create our own syntax in JavaScript. For simplicity sake and easy understanding, we will stick to a single javascript structure. Variable Declaration. We are going to implement a new syntax for declaring variables in JavaScript. The new syntax definition will be below.

```js
// `set` and `define` to replace `let` and `const`

set name as "Duncan";
// let name = "Duncan";

define k as 1024;
// const k = 1024;
```

With the syntax, we could `split` the input and replace `set` and `define` with `let` and `const` respectively but everyone can do that. Let's try something else.

A compiler.

Don't get too scared, it will be a very small and tiny one. For simplicity, our compiler will only support `numbers`, `strings`, `boolean` and `null`.

## The Compiler

Different compilers work in different ways but break down to the three primary stages:

- **`Parsing`** : takes the raw code and turning it into an abstract representation known as an Abstract Syntax Tree (AST)
- **`Transformation`** : takes the abstract representation and transforms and modifies it into another abstract representation of the target language.
- **`Code Generation`** : takes the transformed abstract representation and generates the new code based on the given abstract representation.

## Parsing

Parsing also gets broken down into two stages. `Lexical Analysis` (lexing/ tokenizing) and `Syntactic Analysis`. `Lexical Analysis` takes the raw code and turn each character it into a `token` with the lexer/tokenizer. The tokenizer returns an array of all the tokens for a given syntax.

```js
// Given the code
set age as 18;
```

The `tokenizer` will return the array below.

```js
[
  { type: 'keyword', value: 'set' },
  { type: 'name', value: 'age' },
  { type: 'ident', value: 'as' },
  { type: 'number', value: '18' },
];
```

> _Tokens are an array of tiny little objects that describe an isolated piece of the syntax_.

Each token is an object with a `type` and `value` property. The `type` holds the type of the current character or set of characters being passed. `value` property stores the value of the character being passed.
`Syntactic Analysis` then takes the tokens and transforms them with a parser function to an abstract representation of the tokens in relation to each other. Usually, we would have two ASTs where one is from our language and the other is for the target language, but for simplicity again, we will build a single AST modify the same one to produce a different AST.

The parser will return the object below.

```js
// Abstract Syntax Tree for `set age as 18;`
{
  type: "Program",
  body: [
    {
      type: "VariableDeclaration",
      kind: "set",
      declarations: [
        {
          type: "VariableDeclarator",
          id: { type: "Identifier", name: "age" },
          init: { type: "NumberLiteral", value: 18 },
        },
      ],
    },
  ],
}
```

## Transformation

The next stage for our compiler is transformation. Taking the AST and transforming it into a totally new AST for any programming language or just modifying the same one. We won't generate a new AST, we will just modify it.
On our AST, we have at each level an object with a `type` property. These are known as AST Node. These nodes have defined properties on them that describe one isolated part of the tree.

```js
// We have a Node for a "NumberLiteral"
{
  type: "NumberLiteral",
  value: 18,
}

// A Node for a "VariableDeclarator"
{
  type: "VariableDeclarator",
  id: { ...object },
  init: { ...object },
}
```

Fortunately for us, we are doing only one thing with our AST, that is Variable Declaration. Let's see how we will modify our AST.

At the `VariableDeclaration` node, we have a `kind` property that contains the current keyword being used. So we will `traverse` the tree and `visit` each node until have a Node with `type` of `VariableDeclaration` and set the `kind` property to what keyword we want. `let` or `const`

```js
// AST for `set age as 18;`
{
  type: "Program",
  body: [
    {
      type: "VariableDeclaration",
      kind: "set", // <- `kind` will be changed to `let` or `const`
      declarations: [ [Object] ],
    },
  ],
}

// AST after transforming it
{
  type: "Program",
  body: [
    {
      type: "VariableDeclaration",
      kind: "let", // <<<<<<<: Changed from `set`
      declarations: [ [Object] ],
    },
  ],
}
```

## Code Generation

Now that we have our new AST, we can now generate our code. Our new AST has everything we need. The keyword, the variable name and the value assigned to the variable. The name and value can be found in the `VariableDeclarator` node.

Now that's it. A general idea of compilers and how they work. Not all compilers work like this but most certainly do. That's backbone and skeleton of our compiler. If our compiler was a website, all the above will be the HTML.

Let's write some code. 😋

> _We won't use any external libraries, we will write everything from scratch😺. Also, you must have [Node.js](https://nodejs.org) installed on your local system. Use any text editor or IDE of your choice._

Create a new directory and run `npm init -y` and create a new javascript file with any filename of your choice.

In general, we will have 5 main functions in our code

![Compiler](https://dev-to-uploads.s3.amazonaws.com/i/2o16jkeeu3vzuj7q5c1p.png)

### `tokenizer`

We will first declare a `tokenizer` function with a parameter of `input`, the inital code we are going to pass to our compiler as a string. Then initialize a `current` and `tokens` variable. `current` for the current location in the input and `tokens` will be an array that will hold the tokens for each individual `token`. Then we will add a`;`and a`whitespace` character to the end.

```js
const tokenizer = (input) => {
  let tokens = [];
  let current = 0;

  // Add the semicolon to the end of the input if one was not provided
  // Then add whitespace to the end of the input to indicate the end of the code
  if (input[input.length - 1] === ';') {
    input += ' ';
  } else {
    input = input + '; ';
  }
};
```

After the initial declarations in the `tokenizer`, we come to the main part. We will have a `while` loop that will loop over all the characters in the `input` and while there is a character available, we will check for the type of the character and add it to a `token` and add the `token` to the `tokens` array.

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    // We get the current character first
    const currentChar = input[current];

    // Now, we test for the types of each character.
    // We check for Whitespaces first
    // Regex to check for whitespace
    const WHITESPACE = /\s+/;
    if (WHITESPACE.test(currentChar)) {
      // If the current character is a whitespace, we skip over it.
      current++; // Go to the next character
      continue; // Skip everything and go to the next iteration
    }

    // We need semicolons They tell us that we are at the end.
    // We check for semicolons now and also if the semicolon is at the last but one position
    // We only need the semicolons at the end. Any other position means there
    // An error
    if (currentChar === ';' && currentChar === input[input.length - 2]) {
      // If the current character is a semicolon, we create a `token`
      let token = {
        type: 'semi',
        value: ';',
      };

      // then add it to the `tokens` array
      tokens.push(token);
      current++; // Go to the next character
      continue; // Skip everything and go to the next iteration
    }
  }
};
```

We now have check in place for semicolons and whitespaces but there are four more to go. Our compiler supports `strings`, `numbers`, `booleans` and `null`. We will now check for the following types. Remmember we are dealing with single characters so we willl need to put some checks in place else we will be pushing single characters as `tokens`
Still in the while loop

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    const currentChar = input[current];
    //...

    // Now we will check for Numbers
    const NUMBER = /^[0-9]+$/; // Regex to check if character is a number
    // If we use the same method above for the semicolons,
    // We create a number `token` and add it to `tokens`, we end up with a token for
    // each single number character instead of the number as a whole.
    // For example, if we have a number value of `123`, then our tokens will be
    //
    // [
    //   { type: 'number', value: 1 },
    //   { type: 'number', value: 2 },
    //   { type: 'number', value: 3 },
    // ]
    //
    // Instead of
    //
    // [
    //   { type: 'number', value: 123 },
    // ]
    // which we don't want.
    // So we create a `number` variable and check if the next character is a number.
    // If the next character is a number, we add it to the `number` variable
    // Then add the `number` variable's value as the value in our `token`
    // The add the `token` to our `tokens` array
    if (NUMBER.test(currentChar)) {
      let number = '';

      // Check if the next character is a number
      while (NUMBER.test(input[current++])) {
        number += input[current - 1]; // Add the character to `number`
      }

      // Create a token with type number
      let token = {
        type: 'number',
        value: parseInt(number), // `number` is a string to we convert it to an integer
      };

      tokens.push(token); // Add the `token` to `tokens` array
      continue;
    }
  }
};
```

Now that we have numbers underway, the next on our list is `strings`, `booleans` and `null` values. If we used the same approach for the semicolon and add a token for every character, we could face the same problem where we won't the full token value so we will a different approach similiar to the number check.

Strings will be easy to tackle with first. Each string starts and ends with a `"` so based on the same approach for numbers, we check if a character is a `"`, If it is, we will add every value that comes after the quote(`"`) until we meet another quote indicating the end of the string.

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    const currentChar = input[current];
    //...

    // Check if character is a string
    if (currentChar === '"') {
      // If the current character is a quote, that means we have a string
      // Initialize an empty strings variable
      let strings = '';

      // Check if the next character is not a quote
      while (input[++current] !== '"') {
        // If it is not a quote, it means we still have a string
        strings += input[current]; // Add it to the `strings` variable
      }

      // Create a token with property type string and a value with the `strings` value
      let token = {
        type: 'string',
        value: strings,
      };

      tokens.push(token); // Add the `token` to the `tokens` array
      current++;
      continue;
    }
  }
};
```

The last check and we are done with our `tokenizer`. The check for letters. `booleans`, `null` and the keywords, `set` and `define` all have characters that will test true for letters so we will use the same approach as the numbers. If the current character is a letter, we will add it to a new variable and check of the next character is also a letter until we meet a non-letter character then we will return.

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    const currentChar = input[current];
    //...

    // Check if the character is a letter
    const LETTER = /[a-zA-Z]/; // Regex to check if it is a letter
    if (LETTER.test(currentChar)) {
      // If the current character is a letter we add it to a `letters` variable
      let letters = currentChar;

      // Check if the next character is also a letter
      while (LETTER.test(input[++current])) {
        // We add it to the `letters` variable if it is
        letters += input[current];
      }

      // ...
      // See below..
    }
  }
};
```

At this point, we have our `letters` value but we cannot add it to the `tokens` array yet. Each token must have a `type` and a `value` but for letters, they could be different. Our letters could be `true` || `false` which will have a type of `boolean` or the letters could be `set` || `define` which could have a type of `keyword`, so we need another check to check the letters and assign thier token the respective type.

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    const currentChar = input[current];
    //...

    const LETTER = /[a-zA-Z]/;
    if (LETTER.test(currentChar)) {
      // ...
      //
      // Still in the letter check
      // At this point, we have a value for our `letters` so we check for thier types.
      //
      // We first check if the `letters` is `set` or `define` and we assign the `token` a type `keyword`
      if (letters === 'set' || letters === 'define') {
        // Add a `token` to the `tokens` array
        tokens.push({
          type: 'keyword',
          value: letters,
        });

        continue; // We are done. Start the loop all over again
      }

      // If the letter is `null`, assign the `token` a type `null`
      if (letters === 'null') {
        tokens.push({
          type: 'null',
          value: letters,
        });
        continue;
      }

      // If the letter is `null`, assign the `token` a type `ident`
      if (letters === 'as') {
        tokens.push({
          type: 'ident',
          value: letters,
        });
        continue;
      }

      // If the letter is `true` or `false`, assign the `token` a type `boolean`
      if (letters === 'true' || letters === 'false') {
        tokens.push({
          type: 'boolean',
          value: letters,
        });
        continue;
      }

      // If we don't know the `letters`, it is the variable name.
      // Assign the `token` a type `name`
      tokens.push({
        type: 'name',
        value: letters,
      });

      continue; // Start the loop again
    }
  }
};
```

At this point, we are done checking but if the character isn't recognized the our `while` loop will be stuck so we need some error checking in place and finally return the `tokens` from the tokenizer.

```js
const tokenizer = (input) => {
  // ...
  while (current < input.length - 1) {
    // ....
    //
    // If the character reaches this point, then its not valid so we throw a TypeError
    // with the character and location else we will be stuck in an infinite loop
    throw new TypeError('Unknown Character: ' + currentChar + ' ' + current);
  }

  // Return the `tokens` from the `tokenizer`
  return tokens;
};
```

We are done with the `tokenizer`. All the code at this point can be found [here](https://github.com/dephraiim/creating-your-own-javascript-syntax/blob/680fd2c769535eb2b0cd1e2bbe8104abddfde392/index.js).

```js
// You can test your tokenizer with
const tokens = tokenizer('set isEmployed as false');

// [
//   { type: 'keyword', value: 'set' },
//   { type: 'name', value: 'isEmployed' },
//   { type: 'ident', value: 'as' },
//   { type: 'boolean', value: 'false' },
//   { type: 'semi', value: ';' },
// ]
```

### `parser`

Now that the heavy lifting has been done for us in the `tokenizer`, we move to the `parser`. The `parser` takes the `tokens` produced by the `tokenizer` and modifies them into an AST. Out parser will have a `walk` function. The `walk` function will take the current `token` and return the AST Node for that specific `token`.

If we had a `token`

```js
{
  type: "number",
  value: 1024
}
```

The AST Node will be:

```js
{
  type: "NumberLiteral",
  value: 1024
}
```

The code for our `parser`

```js
const parser = (tokens) => {
  // We will declare a `current` variable to get the current `token`
  let current = 0;

  // Then our parser will have a walk function
  const walk = () => {};
};
```

The `walk` function will be a recursive function. We first get the current `token`, check the `type` of the `token` and return an AST Node based on the `type`.

```js
const parser = (tokens) => {
  // ...
  const walk = () => {
    // Get the current `token` with the `current` variable
    let token = tokens[current];

    // From here, we will check for the `type` of each token and return a node.
    if (token.type === 'number') {
      // Our token is a `number`,
      // We increase the current counter
      current++;
      // We create a type `NumberLiteral` and the value as the token's `value`
      let astNode = {
        type: 'NumberLiteral',
        value: token.value,
      };

      // We return the node
      return astNode;
    }

    // We will take the same steps for the `boolean`, `null` and `string` token types
    // Check the value, Increment the counter, return a new node
    // Check for a string token
    if (token.type === 'string') {
      current++;
      let astNode = {
        type: 'StringLiteral',
        value: token.value,
      };
      return astNode;
    }

    // Check for boolean token
    if (token.type === 'boolean') {
      current++;
      let astNode = {
        type: 'BooleanLiteral',
        value: token.value,
      };
      return astNode;
    }

    // Check for null token
    if (token.type === 'null') {
      current++;
      let astNode = {
        type: 'NullLiteral',
        value: token.value,
      };
      return astNode;
    }
  };
};
```

We have checks for `null`, `boolean`,`string` and `number` token types. Let's focus on the remaining ones, `keyword`, `name`, `semi` and `ident`. `ident` will always have a value of `as` so we won't need a node for it. We will just skip it. `semi` also indicates the end of the code so we will ignore it too. We will focus on the `keyword` and `name`

```js
const parser = () => {
  // ...
  const walk = () => {
    let token = tokens[current];
    // ...

    // We now check for the `keyword` token type
    // The presence of a `keyword` token type indicates that we are declaring a variable,
    // So the AST node won't be the same as that of `number` or `string`.
    // The node will have a `type` property of `VariableDeclaration`, `kind` property of the keyword
    // and a `declarations` property which is an array for all the declarations
    if (token.type === 'keyword') {
      // New AST Node for  `keyword`
      let astNode = {
        type: 'VariableDeclaration',
        kind: token.value, // The keyword used. `set` or `define`
        declarations: [], // all the variable declarations.
      };

      // At this stage, we don't need the `keyword` token again. It's value has been used at the astNode.
      // So we increase the current and get the next token
      // Obviously the next one will be the `name` token and we will call the `walk` function again
      // which will have a token type of `name` now and the returned results will be pushed into
      // the declarations array

      token = tokens[++current]; // Increase the `current` token counter and get the next token.

      // Check if there is a token and the next token is not a semicolon
      while (token && token.type !== 'semi') {
        // if the token is not a semicolon, we add the result of `walk` again into
        // the AST Node `declarations` array
        astNode.declarations.push(walk());

        // We then go to the next token
        token = tokens[current];
      }

      // From here, we don't need the semicolon again, so we remove it from the
      // `tokens` array
      tokens = tokens.filter((token) => token.type !== 'semi');

      // Then we return the AST Node
      return astNode;
    }

    // The last is the `name` token type
    // The `name` token type will have a node of type `VariableDeclarator` and an
    // `id` which will also be a another node with type `Identifier` and an
    // `init` with the type of the value.
    // If the token type is a name, we will increse `current` by two to skip the next value after
    // `name` which is `ident` and we don't need it.
    if (token.type === 'name') {
      current += 2; // Increase by 2 to skip `ident`

      // Declare a new AST Node and recursively call the `walk` function again
      // Which the result will be placed in the `init` property
      let astNode = {
        type: 'VariableDeclarator',
        id: {
          type: 'Identifier',
          name: token.value,
        },
        init: walk(), // Call `walk` to return another AST Node and the result is assigned to `init`
      };

      // Return the AST Node
      return astNode;
    }

    // We throw an error again for an unknown type
    throw new Error(token.type);
  };
};
```

We are done with the `walk` function, but the function is just declared in the `parser`, it's not being used by the `parser` so we have to use it.

```js
const parser = () => {
  // ..
  const walk = () => {
    // ...
  };

  // We will now declare our AST. We have been building the nodes,
  // so we have to join the AST as one.
  // The type of the AST will be `Program` which will indicate the start of the code
  // And a `body` property which will be an array that will contain all the other AST we have generated.
  let ast = {
    type: 'Program',
    body: [],
  };

  // We then check if there are token's in the `tokens` array and add thier Node to the main AST
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // Final return of the parse function.
  return ast;
};
```

There you have it, the `parser` in the flesh. You can use the test case for the `tokenizer` above and pass the tokens to the parser and log the results for yourself. You can get all the code up to this point [here](https://github.com/dephraiim/creating-your-own-javascript-syntax/blob/88bdd2b061762aab2ec435e3fba8648591e711da/index.js)

### `traverser`

It's time for our `traverser`. The `traverser` will take the `ast` from the `parser` and a `visitor`. The `visitor` will have objects with names of the various AST Node types and each object will have an `enter` method. While traversing the AST, when we get to a node with a matching visitor object, we call the `enter` method on that object.

```js
// Example Visitor
let visitor = {
  VariableDeclaration: {
    enter() {},
  },
};
```

```js
// Declaring the `traverser`
const traverser = (ast, visitor) => {};
```

The `traverser` will have two main methods, `traverseArray` and `traverseNode`. `traverseArray` will call `traverseNode` on each node in a node array. `traverseNode` will take an node and it's parent node and call the visitor method on the node if there is one.

```js
const traverser = (ast, visitor) => {
  // `traverseArray` function will allow us to iterate over an array of nodes and
  // call the `traverseNode` function
  const traverseArray = (array, parent) => {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  };
};
```

Now that we have the `traverseArray`, we can proceed to the main `traverseNode` function.

```js
const traverser = (ast, visitor) => {
  // ...

  // In the `traverseNode`, will get the  node `type` object and call the `enter`
  // method if the object is present
  // Then recursively call the `traverseNode` again on every child node
  const traverseNode = (node, parser) => {
    // Get the node object on the visitor passed to the `traverser`
    let objects = visitor[node.type];

    // Check if the node type object is present and call the enter method
    // with the node and the parent
    if (objects && objects.enter) {
      methods.enter(node, parent);
    }

    // At this point, we will call the `traverseNode` and `traverseArray` methods recursively
    // based on each of the given node types
    switch (node.type) {
      // We'll start with our top level `Program` and call the `traverseArray`
      // on the `body` property to call each node in the array with  `traverseNode`
      case 'Program':
        traverseArray(node.body, node);
        break;

      //We do the same to `VariableDeclaration` and traverse the `declarations`
      case 'VariableDeclaration':
        traverseArray(node.declarations, node);
        break;

      // Next is the `VariableDecalarator`. We traverse the `init`
      case 'VariableDeclarator':
        traverseNode(node.init, node);
        break;

      // The remaining types don't have any child nodes so we just break
      case 'NumberLiteral':
      case 'StringLiteral':
      case 'NullLiteral':
      case 'BooleanLiteral':
        break;

      // We throw an error if we don't know the `type`
      default:
        throw new TypeError(node.type);
    }
  };

  // We now start the `traverser` with a call to the `traverseNode` with the
  // `ast` and null, since the ast does not have a parent node.
  traverseNode(ast, null);
};
```

That's it for our `traverser`. You can get all the code up to this point [here](https://github.com/dephraiim/creating-your-own-javascript-syntax/blob/c8d05eaef93157fdcf9688dac8d5713a372fb8a8/index.js).

### `transformer`

Next is our `transformer` which will take the AST and modify the AST and return it. Our `transformer` will have a `visitor` object and it will traverse the AST passed as an argument with the visitor and return the modified AST

Since we are only dealing with Variable Declaration's, our visitor will have only one object,`VariableDeclaration` and will change the value of the `kind` to the respective equivalent.

```js
const transformer = (ast) => {
  // We will start by creating the `visitor` object
  const visitor = {
    // Then we will create the `VariableDeclaration` object in the `visitor`
    VariableDeclaration: {
      // Here, we will have the `enter` method which will take the `node` and the `parent`
      // Although we won't use the parent (Simplicity)
      enter(node, parent) {
        // Check if the VariableDeclaration has a `kind` property
        // If it has, we change based on the previous one
        // `set` -> `let`
        // `define` -> `const`
        if (node.kind) {
          if (node.kind === 'set') {
            node.kind = 'let'; // Set it to `let`
          } else {
            node.kind = 'const';
          }
        }
      },
    },
  };
};
```

That's it for our `visitor`. Although we could have done more, like things not related to variable declaration. We could have added a `NumberLiteral` object to multiply every number by 2 or another method to make every string in a `String` uppercase. `visitor` is where the mutations and the modifications take place.

```js
let visitor = {
  // Multiply every number by 2
  NumberLiteral: {
    enter(node) {
      if (typeof node.value === 'number') {
        node.value *= 2;
      }
    },
  },

  // Uppercase every string value
  StringLiteral: {
    enter(node) {
      if (typeof node.value === 'string') {
        node.value = node.value.toUpperCase();
      }
    },
  },
};
```

We are done with the `visitor` but not the whole `transformer`. We need to use the `visitor` we created with the `traverser` to modify our AST and return the modified AST

```js
const transformer = (ast) => {
  // ...visitor

  // We will call the `traverser` with the `ast` and the `visitor`
  traverser(ast, visitor);

  // Finally we return the AST, which has been modified now.
  return ast;
};
```

We are done with the `transformer`, you can get all the code up to this point [here](https://github.com/dephraiim/creating-your-own-javascript-syntax/blob/775d3750c94186495ea72796976a5126b48a3ad7/index.js).

You can test your `transformer` with an ast generated by the `parser` and compare the difference.

### `generator`

We are done with two phases of our compiler, Parsing and Transformation. It's left with the last phase, Code Generation. We will only have one function for this phase, `generator`.

The `generator` will be recursively call itself at each node till we get a giant string of all the values. At each node, we will either return a call to another child node or return a value if the node has no children.

```js
const generator = (ast) => {
  // Let's break things down by the `type` of the `node`.
  // Starting with the smaller nodes to the larger ones
  switch (node.type) {
    // If our node `type` is either `NumberLiteral`,`BooleanLiteral` or `NullLiteral`
    // we just return the value at that `node`.
    case 'NumberLiteral':
    case 'BooleanLiteral':
    case 'NullLiteral':
      return node.value; // 18

    // For a `StringLiteral`, we need to return the value with quotes
    case 'StringLiteral':
      return `"${node.value}"`;

    // For an `Identifier`, we return the `node`'s name
    case 'Identifier':
      return node.name; // age

    // A `VariableDeclarator` has two more `node`'s so we will call the `generator`
    // recursively on the `id` and `init` which in turn will return a value.
    // `id` will be called with the `generator` with type `Identifier` which will return a name
    // `init` will be called with the `generator` with any of the Literals and will also return a value.
    // We then return the results of these values from the VariableDeclarator
    case 'VariableDeclarator':
      return (
        generator(node.id) + // age
        ' = ' +
        generator(node.init) + // 18
        ';'
      ); // age = 18;

    // For `VariableDeclaration`,
    // We will map the `generator` on each `node` in the `declarations`
    // The `declarations` will have the `VariableDeclarator` which in turn has `id` and `init`
    // which when the generator is called on will return a value
    // In total, we will return the `kind` of node with
    // a joined string of what we had from mapping the declarations
    case 'VariableDeclaration':
      return (
        node.kind + // let
        ' ' +
        node.declarations.map(generator).join(' ') // age = 18
      ); // let age = 18;

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the `generator` and join them with a newline.
    case 'Program':
      return node.body.map(generator).join('\n'); // let age = 18;

    //  We'll throw an error if we don't know the node
    default:
      throw new TypeError(node.type);
  }
};
```

Finally, we are done with our `generator` and all the three stages. You can get all the code up till this point [here](https://github.com/dephraiim/creating-your-own-javascript-syntax/blob/aa3f7e6f55b0ebccfa2a5fbd1f1751535f2555b0/index.js).

### `compiler`

Congratulations if you really made it this far. There's only one thing left to do. We need to link all the functions we created and combine it into one single function. We'll name it as the `compiler`

```js
const compiler = (code) => {
  // Take the code and convert it into token
  const token = tokenizer(code);

  // Take the tokens and parse the into an AST
  const ast = parser(tokens);

  // Modify the ast into a new one
  const mast = transformer(ast);

  // Generate the code from the modified AST
  const output = generator(mast);

  // Return the new compiled code
  return output;
};
```

We can now test our baby `compiler`

```js
let code = 'set age as 18;';
let _code = 'define name as "Duncan"';
const js = compiler(code);
const _js = compiler(_code);

console.log(js); // let age = 18;
console.log(_js); // const name = "Duncan";
```

## Conclusion

Congratulations once again on making it to the end 🥳🥳🥳. In view of the fact that we wrote all this, it's kind of useless. No one will use it in the real world and also, if we used it in a real javascript code, we will get all sort of errors, unless of course we had a way to use it in the real world. I am planning on building a babel plugin so please check back in a few weeks. I learnt a lot. I hope you did. Thank you for reading. If you face any errors or have any questions, you can find me on [twitter](https://twitter.com/dephraiim).
