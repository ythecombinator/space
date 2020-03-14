---
path: "/talks/inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for"
date: "2020-01-28"
title: "Inside Fiber: the in-depth overview you wanted a TLDR for"
type: "talk"
---

### Description

![Duration: Full](https://img.shields.io/badge/duration-full-brightgreen?style=for-the-badge)
![Duration: Regular](https://img.shields.io/badge/duration-regular-yellowgreen?style=for-the-badge)

At the core of React.js, lies reconciliation; the mechanism that tracks changes in a component state and projects the updated state to the screen. Starting from version 16, the core team rolled out a new implementation of that internal instances tree (components, DOM nodes, etc.) and the algorithm that manages it code-named Fiber.

In this talk, I want to provide an in-depth overview of important concepts and relevant data structures. We'll then explore how React uses the algorithm to perform initial render and process updates and a few details of the scheduler, the child reconciliation process, and the mechanism of building an effects list.

Last but not least, we'll go through a few magic words we hear a lot, like coroutines, continuations, fibers, threads, generators, and algebraic effects and see how they all relate to React.js itself.

### Events

#### [Manchester Web Meetup #14](https://www.meetup.com/Manchester-Web-Meetup/events/268976216/)

🌎 Manchester, United Kingdom

📍 On The Beach

🗓️ June 17, 2020

👥 _Coming soon_

#### [PragueJS 2020 #1](https://www.meetup.com/praguejs/events/267847596/)

🌎 Prague, Czech Republic

📍 Studio F

🗓️ January 28, 2020

👥 ≈ 60 people audience

### Slides

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;"><iframe src="https://speakerdeck.com/player/8224d219e1144413beef8d9c5d9299d8" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>
