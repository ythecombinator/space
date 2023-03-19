---
title: ' Getting Started With Sass '
date: '2020-08-03'
tags: ['sass', 'css']
draft: false
summary: 'A guide to getting started with Sass'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

Sass is a CSS pre-processor which makes writing CSS more faster and efficient. This is just a faster
way to grab the basic syntax of Sass and how to get started with easily. For more advanced concepts,
check the [Sass Documentation](http://sass-lang.com). CSS on it own can be fun and effective but as the
document get larger and you write more code, it gets more difficult to maintain. Sass makes it easier
to maintain much larger projects.

## Prerequisites

Basic HTML and CSS

## Scss Vs Sass

Sass (Synthetically Awesome Style Sheet) is an older version of sass and it uses a `.scss` extension.
Scss (Sassy Scss) on the other hand is the current version of Sass.

Scss uses curly brackets to show different blocks of code, just like JavaScript whilst Sass uses indentation and uniform tab size, just like Python.

- **SASS** - Syntactically Awesome StyleSheets: **.sass** extension
- **SCSS** - Sassy CSS: **.scss** extension

```scss:style-bracket.scss
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  header {
    height: 50px;
    font-size: 30px;
    p {
      line-height: 10px;
      letter-spacing: 3px;
      &:hover {
        color: white;
        background: #000000;
      }
    }
  }
}
```

```scss:style-indent.scss
body
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  header
    height: 50px;
    font-size: 30px;
    p
      line-height: 10px;
      letter-spacing: 3px;
      &:hover
        color: white;
        background: #000000;

```

## Compiling Scss To Css

The styling language of the browser is CSS. The browser understands CSS but not Scss. With that, our scss code must be compiled into css for the browser to understand.

There are many ways scss can be compiled into clean css code.

> _Sass is written is [Ruby](https://www.ruby-lang.org/en/)._

### Ways to compile Scss Code

- Installing Sass through the command line with Ruby
- Installing compiling softwares such as Koala, Live Reload and Hammer
- Installing using npm globally and compiling the sass code to css using the command line
- VS Code Extensions

> _In this tutorial, I will use the VS Code Extension, feel free to skip the section if you already know how to set it._

## Setting Up Sass For VS Code

- Have [Visual Studio Code](http://code.visualstudio.com) installed.
- Go to the extensions panel and search for `live sass compiler`
- Click on the Extension by Ritiwck Dey and Install it. (_Reload VS Code To Load Extension_)
- Once the extension is installed, you need to set the location in save and the file extension.

  > _Location and extension is a personal preference._

- Search for `settings.json` file in VS Code. Can be found in settings.
- Add the following JSON code to enable your save location and extensions and save the changes.

```json
  "liveSassCompile.settings.formats":[
    // My Settings
    {
      "format": "expanded",
      "extension":".css",
      "savePath":"/css",
    },

    // You can also use this for production.
    // It reduces the css file size

    {
      "format": "compressed",
      "extension":".min.css",
      "savePath":"/css",
    }
  ]
```

- At the bottom of VS Code, a `Watch Sass` button will show. Click on it to compile your sass to css.

<img src="https://dephraiim.github.io/assets/img/posts/watch-sass.png" align="center" />

> _After the button is clicked, the extension will recompile the scss to css on every save_.

## Sass Syntax

Pretty much every valid css is valid sass. If you type a valid css in a sass file without any other sass features, it will recompile it to the same valid css without any changes

### Features of Sass

- Variables
- Control Flow Statements like @if, @each and @for
- Nesting & Interpolation
- Modules & Partials
- Mixins & Functions
- Inheritance
- Operators and Operations
