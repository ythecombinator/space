---
title: '2022 Wrapped: Communities, Public Speaking, and Other DevRel Stuff From a Non-DevRel Engineer'
date: '2022-12-29'
tags: ['career', 'community', 'devrel']
summary: 'It’s that epiphany time of the year, again! But, before, a bit of an introduction!'
---

It’s that epiphany time of the year, again! But, before, a bit of an introduction!

My passion for developer communities started back in 2014-15 when I first experienced in my hometown (Fortaleza, Brazil) tons of developers meeting in their off hours to discuss their hot takes in the front-end realm back then—HTML5, canvas, Three.js experiments, CoffeeScript, Web Components, Ionic, and Angular to name a few—, challenges they’ve encountered, and different ways of doing things.

This passion only grew over time, but all of these were hit hard by the pandemics—just like the entire rest of the world, unfortunately.

I don't know you, but, especially in 2022, I feel all about celebrating the endless ways that thousands of front-end/back-end engineers, UI/UX folks, and overall creators of the web, connected in meetups and conferences throughout the whole year.

## What You Can Expect Here

_TLDR: Matheus' very own Hitchhiker's Guide to the Front-End Conferences, 2023 edition._

I’ve managed to present a few talks that I think went well, and I decided to share what's worked for me in my process of preparing a tech session.

Furthermore, throughout this year—in late 2021, to be honest—, I started running a new personal set of practices for organizing my participation in developer conferences—something I found to be even trickier if your official job position is not to be developer relations—and I'd say things went well too!

Last but not least, I've been to some really amazing conferences and, IMHO, many things went quite well!

So, that's what this post is about: sharing some lessons learned, a lot of _“that went well”_ and other exciting stuff.

## For Speakers

### Preparing Sessions

There's nothing set in stone here, and I'd say every speaker has their own very personal tricks & tips. Of course, there are always some common denominators across great sessions, like having a concise idea, a clear execution, etc.—but you probably know that.

I thought of sharing here some practices I did throughout 2022 more than in any other year that I consider to play a key role in the execution of my talks.

#### Better Structuring The Session

One great thing I've always overlooked is having a good, concise, outline of the presentation from the very beginning.

I'd say this practice has an easy adoption: you can start with a vague outline, continuously work on it and throughout the process, it's going to help you fill out a lot of gaps and build out the content for each of your sections until there are no blank spaces left.

Overall, the structure will be more digestible in the end, not only for you but also for the program committees of the conferences you're submitting to, as many of them—e.g., GitNation and CityJS conferences—actually ask for an outline including a more detailed description of the shape and structure of your talk.

![Multiple CFPs](/content/blog/2022-wrapped/cfp.jpg)

When building the outline, I often structure the presentation following the [“Hero’s Journey” pattern](https://tvtropes.org/pmwiki/pmwiki.php/Main/TheHerosJourney). It's a classic story structure, often employed in literature and film, that follows the tale of a protagonist as they embark on a transformative journey.

Here's an example from my “[Web Performance APIs That You (Probably) Never Knew Existed](https://www.ythecombinator.space/talks/web-performance-apis-you-probably-didnt-know-existed)” session:

1. **An initial conflict**: A section that usually goes by _“A Little Bit of Context”_ or _“Why Am I Here?”_. In this talk, the initial conflict is _“I know this set of performance best practices, and yet, I've seen these problems with our loading times metrics via Real User Monitoring.”_

2. **Hero’s setup**: Here, we're making the audience think about our journey, with topics like web performance metrics and our path of investigating native APIs for collecting and improving performance.

3. **Energy peak** where we beat the villain—bad perceived performance. In this talk, these peaks frequently happen after the audience sees a given technique and how it improved something, with examples and numbers.

4. **Epiphany-alike closing ideas** that will bring an enlightening realization that our performance problems can be understood from a new and more profound perspective. In this talk, there are two sections responsible for this: _“Why are we here?”_, which promotes the reflection on why we should care about perceived performance in the first place. Here, we have resources like impacting numbers and statistics about browsers, quality of connection, devices, etc., previous research about how this impacts people’s emotions, and studies on how to correlate them all with business metrics. The other one is _“Closing Notes”_ where we wrap up with some key takeaways from the session.

In my personal experience, building the session within this framework makes it more interesting, increases audience engagement and in general, helps the messaging be more successful.

#### Dry Runs

Back when I had my college entrance exams, I'd draft the whole essay idea on a separate piece of paper and that'd go around 50/60 lines of text. Then, I'd go through the whole outline and key parts and cut it down to the allowed limit of 30 lines.

Once the first MVP—aka. _Minimum Viable Presentation_—version of the session is ready, I run it for the first time. And, just like those essays in high school, the first run is always larger than the allowed limit! So, this part is a lot about cutting off the outline, tweaking the slides, and iterating again.

When I feel I have the first “pre-release” of the session, I reach out to a few friends, schedule dry runs with them, and pretend it's the first time. I have a fixed list of people I always go with—a huge shoutout to [Macabeus](https://twitter.com/bmacabeus), [Lucas](https://twitter.com/tsirlucas), and [Augusto](https://twitter.com/falcaoaugustos)—and who always provide great feedback on different areas, like the overall visual aspect, my selection of information and ideas, coherence throughout the session, the chosen level of detail and many others!

Last but not least, whenever I get an existing session approved for another event with a different time slot, I also run again—this time, only on my own—to understand how much I’ll need to cut. Usually, two scenarios fit here:

- Sessions that are originally 45/50/60 minutes long—mostly tailored for general-purpose conferences which have long slots, like the NDC events—and need to be cut to fit front-end/React conferences with slots like 25/30 minutes.

- Sessions that were 50/60 minutes long on my first rehearsals, had to be shrunk to fit 25/30 minute slots and then got approved to larger slots and need to be adapted again.

#### Audience Interactions

![Audience raising hands at React Day Berlin 2022](/content/blog/2022-wrapped/audience-interactions.jpg)

Last but not least, there's another practice that I've seen to increase audience engagement is to turn your presentation into an open dialogue.

I'd say there are a few different ways you can do this here:

##### #1 Contextualization Questions

Here you get to understand your audience's technical background. Examples are:

- checking who's familiar with modern front-end development in a **generic IT conference**;

- checking how much of your audience are advanced React engineers in a **generic front-end** conference;

- checking who's familiar with a specific bundler, testing library, etc. in a **React conference**.

A few simple _“raise your hands”_ questions might sound almost like sharing the mic with every attendee and give you powerful insights to guide your whole presentation strategy, including:

- how much time you should invest in explaining a given topic;

- whether you should spend some time addressing necessary previous knowledge;

- whether you should focus on diving deep into every aspect of one topic or providing just an overview with a high-level, example-driven, approach.

Recent examples of this:

- In [Frontmania 2022](https://frontmania.com/), I found out that a considerable part of the audience was working mostly with Angular and Vue. Even though they had knowledge of React, given that my session (“[Inside Fiber: the in-depth overview you wanted a TLDR for](https://www.ythecombinator.space/talks/inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for)”) was a deep dive into the internals, I had to provide some extra context in some situations.

- In [Build Stuff 2022](https://www.buildstuff.events/), I realized about 40% of my audience were primarily back-end engineers. Although my talk was framework-agnostic, in some examples, I had React components. Because I was aware a huge percentage of them probably didn't have a lot of familiarity with React, I spent some extra time in these slides, detailing what was happening there.

##### #2 Open Discussion Questions

These are probably my favorite ones because you can always spark exciting discussions and make the messaging of your talk more successful by gathering audience opinions and hot takes on a specific topic. I've done this a few times in my sessions, usually with tricky mental exercises:

- _“If you were to summarize web performance in one metric, what’d be your pick?”_ I asked during my session “[Web Performance APIs That You (Probably) Never Knew Existed](https://www.ythecombinator.space/talks/web-performance-apis-you-probably-didnt-know-existed)”.

- _“If you were to summarize Concurrent React in one word/expression, what’d be your pick?”_ during “[Deep diving on Concurrent React](https://www.ythecombinator.space/talks/deep-diving-on-concurrent-react)”

This also allows you to run detailed reports and analyze the results after the conference. Then you can power the content/structure decisions we discussed a few paragraphs above for the upcoming talks with actual data/input from your audience.

In the example of the Concurrent React session, I was able to draft a few conclusions on top of the results:

- There’s still a lot of confusion around _“parallelism”_, _“multithreading”_, and _“workers”_ vs the actual cooperative, single-rendering-threaded, model.

- Results like _“pointless”_, _“madness”_, and _“difficult”_, IMHO, show that it's still not clear how all the features fit together just by looking at the individual pieces.

These will turn into long-term insights you can also use to engage the audience after the session, like when I built a report around the impressions above of React engineers over the new Concurrent React features.

![Poll results](/content/blog/2022-wrapped/results.jpg)

Depending on what you use for your speaker decks, there are different technologies you can choose to allow your audience to watch results come in live on the big screen. The best option I've found so far for Keynote was the [Poll Everywhere](https://www.polleverywhere.com) plugin, which is also available for other platforms like PowerPoint and Google Slides.

Last but not least, this strategy is also great because it works whether you present virtually, in person, or in a hybrid environment—which is getting more and more common in this post-pandemic era.

##### #3 Tech Trivia Questions

I got this technique by watching a session about tricky/unexpected JavaScript behaviors—something along the lines of [Wat](https://www.destroyallsoftware.com/talks/wat)—by [Macabeus](https://twitter.com/bmacabeus) about two years ago, where he would play with the audience using a live Kahoot trivia game.

I admit I loved the idea so much I decided to do something similar with my colleagues at Citrix back then, and I put their knowledge about JavaScript to the test with a similar, five-questions-based-quiz, session in one of our internal front-end meetings. We had some nerdy fun in the process and the feedback was great!

I never got another chance to prepare something similar ever since, but the technique happened to be of great help this year at [React Alicante](https://reactalicante.es), in September. I managed to convince Medallia to sponsor the conference—mostly to raise our awareness and brand visibility among the Spanish front-end community—and, as a part of the sponsorship packages, we got a booth at the venue.

During the ideation of the activities we'd be doing at the booth, the Kahoot idea popped up again and we decided to give it a try. We prepared some trivia React/TypeScript questions, targeting different seniority levels, and the result went way better than expected!

![Tech Trivia at React Alicante](/content/blog/2022-wrapped/trivia.jpg)

Everyone was hyped to test how much they knew about these technologies and learn a thing or two. The numbers went like this:

- ~90 people playing the trivia;
- ~10 rounds played during the coffee breaks;
- 70+ Medallia t-shirts given away as prizes;
- 12+ people filled out the form for working with us.

I am looking forward to my next opportunity to try live tech quizzes again!

### Finding Events

One of the questions I get the most is how I manage to be aware of so many events and their Call For Papers.
Well, luckily enough, there are plenty of resources out there where one can hear about conferences. My list includes:

- https://confs.tech
- https://dev.events
- https://app.speakerhouse.io/events
- https://sessionize.com (More specifically, it's _“Discover Events”_ tab that speakers have access to)

### Orchestrating Sessions ∩ Events

Okay, now that we discussed the ideation process of a session and where to find events to present your fantastic talk at, we can explore the next step which is: how to coordinate the whole process of submitting different sessions across different events in different parts of the globe!

#### The Old Fashion

First, I'd like to share my strategy for 2019-20. I had a Trello board with:

- **Four different lists**: _Proposals_, _Submitted_, _Rejected_, and _Approved_.

- **Labels** representing the conferences/meetups.

- **Cards** representing the sessions that I'd copy-paste all over the four different categories above and label them accordingly.

![Trello: Board with all the sessions](/content/blog/2022-wrapped/trello-board.png)

You could then think I'd have information for each of the sessions stored within the card for that session, right?

![Trello: Card for one session](/content/blog/2022-wrapped/trello-card.png)

Nope! It turns out that Trello didn't have support for rich text descriptions of the cards back then. This was a dealbreaker for me, given that, when submitting a proposal, most of the conferences ask you for more information than a simple title/abstract pair; it's fairly common to get prompted for stuff like an **elevator pitch**, **keywords**, **target audience**, **required knowledge of participants**, etc.

To suppress this lack of _RTE_ support, I started then using Trello alongside Google Documents.

![Google Docs: Session details](/content/blog/2022-wrapped/google-docs-talks.png)

Last but not least, I had another Google Document where I'd keep my personal data useful for submitting, like current location, position, company, etc.

![Google Docs: Personal details](/content/blog/2022-wrapped/google-docs-bio.png)

I wasn't happy with the way things were going already—it simply didn't scale—and when I faced myself about to add a third app to the equation (Google Calendar), I decided it was about time to shift to something else.

#### The New Fashion

There are a lot of productivity apps on the market. I had a shortlist of some of them that included Monday, ClickUp, Evernote, and Airtable.

Because I was using Notion already to organize some personal stuff like traveling, I decided to give it a try as my all-in-one sessions ↔ conferences solution.

I start from the main sources I listed in the section above—I do check other websites, but these are the best ones IMHO. I then gather and reconcile all the data in Notion. It looks like this:

![Notion: All sessions](/content/blog/2022-wrapped/notion-list.png)

This also helps me organize their status on a calendar:

![Notion: Calendar](/content/blog/2022-wrapped/notion-calendar.png)

Last but not least, I track which sessions I submitted to a given event so that I can get a better understanding of the actual profile of this conference and what kind of topics they tend to approve/reject.

![Notion: Info for each session](/content/blog/2022-wrapped/notion-session.png)

To be honest, I am still iterating on this approach but so far, I've enjoyed the experience! Among other stuff, I'd highlight in Notion:

- It's got huge flexibility and a delightful user experience;
- It's free for personal use;
- It does have some tools that enable you to have a certain level of project and task management in one place.

## For Conference Organizers

I have been involved in the organization of meetups and other small events in my hometown back in 2015-18, but I never really got to organize anything for more than 100 people. Given that, my views here are more biased as both an attendee and a speaker, but not an organizer.

There are a bunch of different practices that result in a remarkable conference experience and I would never come up with an exhaustive list, but here are some things that certainly would make your event great!

### Budget

First and foremost, ensure you have all the basic stuff to be covered by your budget, including:

- all the speaker expenses (traveling tickets, accommodation close to the conference venue, commute from the airport to the hotel, etc.);

- speaker dinners and other fun activities;

- proper A/V and room setup (LED displays, proper lighting, etc.);

- food & drinks for everyone;

- staff—of course, here I mean those who are not volunteer work from the community.

### Audience Demographics

Now that's something I had never seen in a conference and I have to say it was just an incredible idea by the [React India team](https://www.reactindia.io)!

A few weeks before the event, they shared some anonymous statistics describing the audience, which included in-person and online attendance numbers, seniority levels (ranging from beginner to expert), and companies they were coming from.

This demographic analysis is really helpful for speakers to consider their content beforehand.

### Simple Feedback System

In my opinion, that's something most of the front-end/React events should learn from multipurpose development ones.

Usually, what you see out there are either some digital surveys emailed to the attendees or feedback gathered in apps like Eventee. Although these are great for more complex analysis and fancy stuff like weighted averages, what I notice is that unfortunately, only very few attendees take the time to fill out some sort of survey, no matter if that's during or after the conference.

I've always wondered what would be a better way to do that—not necessarily a replacement, perhaps a complementary solution—, until I went to [DevConf PL](https://devconf.pl/) and saw that they had ballot drop boxes available for feedback during the talks. Throughout the year, I then realized that it seems to occur regularly in back-end driven events or generic software development ones, after seeing the same system in conferences like [NDC Oslo](https://ndcoslo.com/) or [Build Stuff](https://www.buildstuff.events/).

The voting ballots were colorful cards (🟢 Green / 🟡 Yellow / 🔴 Red) outside the room. They are counted after each of the sessions and then each speaker gets an email after the conference wraps up with their numbers.

That simple!

## Accomplishments

![Me out there](/content/blog/2022-wrapped/accomplishments.jpg)

I'd say this year brought a lot of new experiences and a ton of wins! I know this post is a bit long already, but I will share a few of them as I feel fortunate and proud of them. Here you'll find some of those mentioned wins and also some not-so-great results.

- I helped draft a developer communities program at Medallia from almost nothing with a fantastic crew and we went from zero to sponsoring three conferences: [DevConf 2022](https://devconf.pl), [React India 2022](https://www.reactindia.io/) and [React Alicante 2022](https://reactalicante.es). We learned a lot together and are still evolving. This is our Spanish squad in React Alicante! 🤩

![Medallia at React Alicante](/content/blog/2022-wrapped/medallia+react-alicante.jpg)

- I crafted eight different sessions, and four of them I managed to present throughout the year.

- I submitted to **41 conferences** in **25 locations**—online + 24 countries—and 34 cities. Out of these:

😅 In **16** of them, I was not accepted.

🤩 In **13** of them I was approved and I managed to deliver the presentation successfully.

🤦 In **8** of them, I never heard back from the organization/committee. IMHO, this is a red flag that shows a considerable lack of respect for anyone who spent some time writing down ideas and filling up CFP processes.

😥 In **4** of them I was approved, but I had to withdraw my submission for various reasons (e.g., because of calendar conflicts or personal issues).

- I traveled to **10 different countries**.

- I was invited to **two podcasts**, one in English and one in Portuguese—these are yet to be published.

- I was invited to write **one magazine article** about web performance.

- I improved my overall skills in writing/reviewing CFPs and preparing other less-experienced speakers.

- Last but not least, I met dozens of amazing people who are now friends and who I'm already hyped to see again.

## Closing Time…

Finally, I'd love to wish all of you out there a great Holiday Season! Happy Holidays and a Happy New Year, everyone!

See you all next in 2023! 🎆
