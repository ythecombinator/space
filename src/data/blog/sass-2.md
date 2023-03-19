---
title: ' Getting Started With Sass - 2'
date: '2020-08-13'
tags: ['sass', 'css']
draft: false
summary: 'Part 2 of guide to getting started with Sass'
---

## Introduction

In the earlier part of this post, I talked about what Sass is and how to get started easily for a beginner programmer. You can find it [here](/dephraiim.github.io/2020/04/18/getting-started-with-sass.html). In this section, I assume you have set up your development environment and you are ready to get started coding with Sass.

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Sass Variables

Variables are just placeholders. They hold data for future use. Sass Variables are simple and very elegant. You can just assign a value to a variable name: the value can be a color name, hexadecimal value of a color, size in px or rem, virtually any data useful can be stored.

To assign a variable, prefix `$` infront of the variable name and that's it. It's that simple.

```scss:example.scss
// Assigning varible
$primary-color: #333;
$font-stack: Roboto, sans-serif;
$font-size: 1.2em;

// Using the variable
body {
  background: $primary-color;
  font: $font-stack $font-size;
}
```

Sass variables follow the same syntax as assigning a css property to a value `{$}{variable-name}: {value};`.

There are no special rules to Sass variables, they must be meaningful and they follow general variable rules. However, `-` and `_` are considered the same in sass.
For example, `$primary-color` and `$primary_color` are the same.

```scss
$text-color: #f0f0f0;

p {
  color: $text_color:
}

// No errors will be produced
```

> CSS also has variables, seperate from the Sass Variables. The two are not the same.

## Sass Nesting

When writing CSS, take a situation wherehy you are creating a navbar, with the nav tag and in the nav tag are a list each containing a link. To select a link to apply a style to it, you need to select ll the parent tags(for specificity) to get a style work on a specific tag. Sass makes your life easier. You can just write the code for the tag in the parent. That's nesting

```css
nav {
  display: flex;
  flex-direction: column;
  text-align: center;
}

nav li {
  list-style-type: none;
}

nav li a {
  text-decoration: none;
  text-transform: uppercase;
}
```

The above CSS can be written more easier in Sass and Sass will compile it to the same CSS above without any change and errors

```scss:nesting.scss
nav {
  display: flex;
  flex-direction: column;
  text-align: center;

  li {
    // The li tag nested in the nav tag
    list-style-type: none;

    a {
      // The anchor tag now nested in the li tag
      // which is nested in the nav tag
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
```

You can also replace the tags with `id` and `classes`.

> If the property does not apply during nesting, try parent selectors `&`.

> The sytax for the parent selectors in nesting is by replacing the selector with the `&` symbol.

In applying nesting on pseudo-classes and pseudo-elements, you can apply the parent selector for much greater specificity. Also, the parent selector copies the parent name for the nested child.

```scss:nesting-selectors.scss
section {
  display: grid;
  grid-template-colums: repeat(3, 1fr);

  &.container {
    // Selecting the container class in the section
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  }
}
```

The Sass will compile to CSS like the one below,

```css
section {
  display: grid;
  grid-template-colums: repeat(3, 1fr);
}

section section.container {
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
}
```

To extend a `class` name or `id` name, you can use the parent selector for that too. Assuming we have a `.container` class and we have nested `.container-fluid` in the `.container` class, since both of the class names begin with `.container` and it wont be neceesary to type `.container` for the two class names. You can use the parent selector for it. As I said earlier, Sass makes your life much easier.

```scss:extend.scss
.container {
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;

  &-fluid {
    //Selecting the .container
    width: 100%;
  }
}
```

The compiled CSS will be as below.

```css
.container {
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
}

.container .container-fluid {
  width: 100%;
}
```

## Sass Mixins

Sass mixins are just like mixins in Ruby and functions in JavaScript. You can type in reusable blocks of code into the mixin and reuse it over and over again. Mixins can take an argument or not, It is not compulsory.

> _Note_: Mixins are not he same as functions. Sass has functions too and the two are not the same.

The syntax to create a mixin is `@mixin <mixin-name> { ... }` or `@mixin <mixin-name>(< arguments...> ) { ... }`. To reuse the mixin after it has been created, you can just type `@include <mixin-name>` or `@include <mixin-name>( < arguments > )` at the place you want to include the mixin then it works. You can include the mixin more than once.

```scss:mixins.scss
// Mixin without arguments
@mixin links {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
}

// Including mixin
a {
  @include links;
}

// Mixin with arguments
@mixin button($color, $border-width, $padd-top, $padd-left) {
  color: $color;
  text-transform: uppercase;
  margin: 5px 10px;
  border: $border-width solid $color;
  padding: $padd-top $padd-left;
}

button {
  @include mixin(#000000, 5px, 10px, 20px);
}
```

> The order in which you arrange the arguments is not important. But when filling our the arguments with the values, it must be in the same order as you specified them, else you can interchange the value of one property with another.

> Sass Mixins and Functions are not the same.

### Sass Functions

Sass Functions look similiar to mixins but different. In Sass, mixins return a block of code, chunk of code that can be used over and over again. For functions, they are made to return a specific value. Single values, not blocks of code. Functions have a return statement, just like javascript but mixins do not.

The syntax for creating the function is as follows.

```scss:functions.scss
@function <name>(<parameters...>) {
  // function code
  @return <return statement>;
}
```

To use the function, in a code, you just call the function name and apply the arguments to it.

```scss
// Function To Change Rem to Pixils

$base-size: 16;

@function toRem($size) {
  @return $size / $base-size;
}

.card {
  font-size: toRem(200) * 1rem;
}
```

> Functions are mainly used for calculations. For dynamic calculations od sizes, lengths, widths and even colours. Sass also has inbuilt functions to perform some actions.

## Sass Modules

Modules are divisions of code into other sections amd partials. It prevents DRY code. Sass implements this system to make it easy to maintain the code and faster to debug. You create a main scss file, then you create a partial file, beginning the file name with `_`, then you import the partial into the main file.

> The partial can be located anywhere as long as you link the correct path in the main file.

To use a partial in a main file, use `@import "<file_name>";` _Do not add the_ `_` and the `.scss` when using the import. Sass identifies it automatically as long as you have the correct path.\_

```scss:main.scss
@import 'variables';
@import 'resets';
```

```scss:_variables.scss
$font-size: 20px;
$font-weight: 300;
$primary-color: #aaa;
$light: #fff;
$dark: #333;
$border: 2px solid #444;
```

```scss:_resets.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Fira', 'Roboto', sans-serif;
  color: white;
}
```

With the above example, Sass will insert the `variables` and the `resets` partial in a single css file for the brower to render easily.

Sass also applies `@use` for importing a module.`@use` and `@import`are similiar but there are differences.`@import`is already a default css functions which makes it sometimes confusing. For`@use`, you do not neccesarily insert the whole code but you can access specific functions,mixins or variables in the code.

```scss:_variables.scss
$font-size: 20px;
$font-weight: 300;
$primary-color: #aaa;
$light: #fff;
$dark: #333;
$border: 2px solid #444;
```

```scss:main.scss
@use "variables";

p {
  font-size: variables.font-size;
  font-weight: variables.font-weight;
  color: variables.light;
}
```

You can also change the default value in a variable when you import it in the code.

```scss:_variables.scss
$primary: #aaa !default;
$light: #fff !default;
$dark: #333;
$_moon: #1e1e1e;
```

```scss:main.scss
@use "variables" with (
  $light: #eee,
  $dark: #444
);
// Changes the default value set in the `variable` file,

.card {
  background: variables.dark;
  color: variables.light;
  &:hover {
    background: variables.primary;
    // The Value of this will not change since
    // you did not set a new value when it was imported
  }
}
```

> To configure the values in a file,`!default` must be set after it to make it available for configuration. `@use` brings a new feature when you can make a variable private to avoid it from being used or modified. To make a variable private, `-` or `_` must be prefixed to it and it makes private.

## Sass Inheritance.

Sass allows you to inherit a block of code in a specific selector. It extends the same code into the new selector.

`@extend` is used.`@extend <selector>` is the syntax for extending a block into a new one.

```scss:inheritance.scss
.p {
  font-size; 1.2rem;
  font-family: "Roboto", sans-serif;
}

article {
  @extend .p
  // Extends the code here.
}

```

The compiled CSS will look like this.

```css
.p {
  font-size; 1.2rem;
  font-family: "Roboto", sans-serif;
}

article {
  font-size; 1.2rem;
  font-family: "Roboto", sans-serif;
}
```

> Values extended can be overidden. Just declare the property again with another value and that's it.

Sass is beautiful. Try it out.
