---
title: 'Driving towards a universal navigation strategy in React'
date: '2020-01-13'
tags: ['react', 'react native', 'navigation']
draft: false
summary: 'When I joined STRV, they had a specific request for me; to build a front-end app for iOS, Android, and Web, sharing component and business logic amongst all the platforms.'
---

When I joined [STRV](https://www.strv.com), they had a specific request for me; to build a front-end app for iOS, Android, and Web, sharing component and business logic amongst all the platforms.

Since I’m a front-end developer who loves new areas, I couldn’t say no and I had to jump at the opportunity.

I ended up facing many different challenges; from lack of real-world-scenarios content related to React Native Web to unexpected lack of documented stuff on popular projects, to struggling to build some platform-specific modules.

And this post is focused on – a very important – part of this journey: building a navigation solution.

But first...

## A bit of context

I had only worked on an example React Native app before (uncompiled and unpublished). At the time of this project, I didn’t know much about React Native, to be honest.

I first heard of [Expo](https://expo.io/) and its experimental web support<sup>1</sup> but I decided not to go for it mostly because I enjoy having control over the project stack and being aware of what's happening; I want to be able to customize the installation, install custom versions of modules and have more control of project dependencies.

I then heard of two other initiatives on Github: [ReactNative for Web](https://github.com/necolas/react-native-web) and [ReactXP](https://github.com/microsoft/reactxp). Both share similar goals but the approaches differ. As the official documentation for ReactXP states:

> ReactXP is a layer that sits on top of React Native and React, whereas React Native for Web is a parallel implementation of React Native — a sibling to React Native for iOS and Android.

This post won't focus on covering the differences between these two but, after going through some technical blog posts and talks, we ended up going for ReactNative for Web.

After a bit of digging into articles and trying to implement each environment in its own realm, I found that for me, the best starting point was a great template, called [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo)<sup>2</sup>, which brings support for universal apps using a little help from [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

Before starting to implement this approach into your project, though, I would suggest reviewing your requirements and checking whether these tools solve all of your needs.

## What we have out there

Some popular routing solutions on the React.js ecosystem were not meant to support both DOM and native environments; `<div>`s are different from `<View>`s, `<ul>`s are different from `<FlatList>`s and most of the web primitives are different from the mobile ones – which makes it difficult to come up with a universal solution. [@reach/router](https://reach.tech/router) is one example of web solutions that have opted not to face the challenges of supporting both environments.

As of now (January 2020), though, we have a few ready universal web/native formulas. But they all ended not serving completely our needs:

- [react-router](https://github.com/ReactTraining/react-router) is a great option for the web, but when on [mobile](https://reacttraining.com/react-router/native), it lacks screen transitions, modals, navbar, back-button support, and other essential navigation primitives.
- [react-navigation](https://reactnavigation.org/) suits great on mobile but given its [web](https://reactnavigation.org/docs/en/web-support.html) support is still considered to be experimental – and has not yet been widely used in production – it's very likely you're going to face a few issues<sup>3</sup> related to history and query parameters. Also, it lacked TypeScript typings – which made me write part of the definitions on my own since TypeScript was a must-have for the project.

And this brings us to the next part!

## Thinking of a solution

> The code from this post is available on GitHub: [ythecombinator/react-native-web-monorepo-navigation](https://github.com/ythecombinator/react-native-web-monorepo-navigation)

I admit one of the most puzzling things when we dived into this journey was not being able to find how popular apps out there using React Native for Web (e.g. Twitter, Uber Eats and all the others mentioned [here](https://github.com/necolas/react-native-web#react-native-for-web)) are doing navigation – and how they faced challenges like the ones I mentioned before.

So we had to work on our own!

Our new solution was based on abstracting on top of the most recent releases of react-router-dom<sup>4</sup> and react-navigation<sup>5</sup>. Both evolved a lot and now them two seem to share a few goals which I consider to be key-decisions for properly doing navigation/routing in React:

- Hooks-first API
- Declarative way to implement navigation
- First-class types with TypeScript

Given that, we came up with a couple of utils and components which aim a universal navigation strategy:

### [`utils/navigation`](https://github.com/ythecombinator/react-native-web-monorepo-navigation/blob/master/packages/components/src/utils/navigation)

Exposes two hooks:

- `useNavigation`: which returns a `navigate` function that gets a route as a first param and parameters as other arguments.

  It can be used like this:

  ```tsx
  import { useNavigation } from '../utils/navigation';
  // Our routes mapping – we'll be discussing about this one in a minute
  import { routes } from '../utils/router';

  const { navigate } = useNavigation();

  // Using the `navigate` method from useNavigation to go to a certain route
  navigate(routes.features.codeSharing.path);
  ```

  It also provides you with a few other known routing utilities like `goBack` and `replace`.

- `useRoute`: which returns some data about the current route (e.g. `path` and `params` passed to that route).

  This is how it could be used to get the current `path`:

  ```tsx
  import { useRoute } from '../utils/navigation';

  const { path } = useRoute();

  console.log(path);

  // This will log:
  // '/features/code-sharing' on the web
  // 'features_code-sharing' on mobile
  ```

### [`utils/router`](https://github.com/ythecombinator/react-native-web-monorepo-navigation/tree/master/packages/components/src/utils/router)

This basically contains a `routes` object – which contains different paths and implementations for each platform – that can be used for:

- Navigating with `useNavigation`
- Switching logic based on the current route with `useRoute`
- Specifying the `path` – and some extra data – of each route rendered by the `Router` component

### [`components/Link`](https://github.com/ythecombinator/react-native-web-monorepo-navigation/tree/master/packages/components/src/Link)

It provides declarative navigation around the application. It is built on top of `Link` from `react-router-dom` [on web](https://github.com/ythecombinator/react-native-web-monorepo-navigation/blob/master/packages/components/src/Link/index.web.tsx) and `TouchableOpacity` + `useNavigation` hook [on mobile](https://github.com/ythecombinator/react-native-web-monorepo-navigation/blob/master/packages/components/src/Link/index.native.tsx).

Just like `Link` from `react-router-dom`, it can be used like this:

```tsx
import { Text } from 'react-native';

import { Link } from '../Link';
import { routes } from '../utils/router';

<Link path={routes.features.webSupport.path}>
  <Text>Check "Web support via react-native-web"</Text>
</Link>;
```

### [`components/Router`](https://github.com/ythecombinator/react-native-web-monorepo-navigation/tree/master/packages/components/src/Router)

This is the router itself. On the web, it's basically a `BrowserRouter`, using `Switch` to pick a route. On mobile, it's a combination of both `Stack` and `BottomTab` navigators.

Wrapping up everything above, what you get is going through each [screen](https://github.com/ythecombinator/react-native-web-monorepo-navigation/tree/master/packages/components/src/screens) of the app and seeing how `useRoute()`, `useNavigation()` and `<Link />` can be used regardless of the platform you are.

If I was asked about future work on this, I'd mention as next steps:

1. Adding more utilities – e.g. a `Redirect` component aiming at a more declarative navigation approach<sup>6</sup>

2. Tackling edge cases on both platforms

3. Reorganizing most of the things inside a navigation library and leaving only the main `Router` component and `utils/router` to be written on the application side.

## Conclusions

My feeling is that web, mobile web, and native application environments all require a specific design and user experience<sup>7</sup> – and by the way, this matches the mentioned _“learn once, write anywhere”_ [philosophy behind React Native](https://reactjs.org/blog/2015/03/26/introducing-react-native.html).

Although codesharing is a great advantage to React and React Native, I'd say that it is very likely that shared cross-platform code should be:

- Business Logic
- Config files, translation files, and most constant data – those that are not render-environment-specific
- API / Formatting; e.g. API calls, authentication and formatting of request and response data

A few other layers of the app, like routing, should use a library that is most appropriate for the platform, i.e. `react-router-dom` for web, and `react-navigation` or similar for native.

Perhaps in the future, we can have a truly unified code base, but for now, it doesn't feel like the technology is ready and the approach shared here seemed to be the most suitable one.

## Footnotes

1 • There's an amazing [talk by Evan Bacon on Expo for Web](https://www.youtube.com/watch?v=k1FdrhA2sCY) this year at Reactive Conf – if you haven't checked it out, I really recommend you to.

2 • This one was authored and is the same used by Bruno Lemos, the author of [DevHub](https://devhubapp.com/), a Github client that runs on Android, iOS, Web, and Desktop with 95%+ code sharing between them. If you're interested in how he came up with this solution, check [this](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej) out.

3 • These issues include:

- Functionality-wide
  - Query parameters from URL not passed down ([here](https://github.com/react-navigation/web/issues/45))
  - Pushing back not working ([here](https://github.com/react-navigation/web/issues/22) and [here](https://github.com/react-navigation/web/issues/41))
  - Some params pushed from one route to the other for convenience being encoded to the URL
- Developer-experience-wide
  - Lack of TypeScript typings ([here](https://github.com/react-navigation/web/issues/34)) – which made me write part of the definitions on my own

4 • [React Router v5](https://reacttraining.com/blog/react-router-v5/) focused mostly on introducing structural improvements and a few new features. But then [v5.1](https://reacttraining.com/blog/react-router-v5-1/) brought a bunch of some useful hooks which allowed us to implement the mentioned ones for the web.

5 • [React Navigation v5](https://blog.expo.io/announcing-react-navigation-5-0-bd9e5d45569e) also did many efforts for bringing a modern, hooks-first API, allowed us to implement the mentioned ones for mobile.

6 • There's a very good post about doing declarative and composable navigation with `<Redirect />` [here](https://tylermcginnis.com/react-router-programmatically-navigate/).

7 • If you're interested in this topic, in [this talk](https://www.ythecombinator.space/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop) I share a couple of lessons learned while building an app with code sharing as a primary objective — from project setup, through shared infrastructure, all the way up to shared components and styling — and how you can achieve the same thing.
