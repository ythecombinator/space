import {shuffleItems} from 'utils/array';

import featuredTalk01 from './assets/cejs-2016.jpg';
import featuredTalk02 from './assets/cejs-2017.jpg';
import featuredTalk04 from './assets/front_in_fortaleza-2018.jpg';
import featuredTalk13 from './assets/frontend_talks_brn-2019.jpg';
import featuredTalk15 from './assets/frontend_talks_brn-2020.jpg';
import featuredTalk14 from './assets/frontend_talks_prg-2019.jpg';
import featuredTalk16 from './assets/frontend_talks_prg-2020.jpg';
import featuredTalk06 from './assets/natal_tech_conference-2019.jpg';
import featuredTalk03 from './assets/phpeste-2017.jpg';
import featuredTalk05 from './assets/react_nyc-2018.jpg';
import featuredTalk08 from './assets/tdc_bh-2019-1.jpg';
import featuredTalk09 from './assets/tdc_bh-2019-2.jpg';
import featuredTalk07 from './assets/tdc_florianopolis-2019.jpg';
import featuredTalk10 from './assets/tdc_sp-2019-1.jpg';
import featuredTalk11 from './assets/tdc_sp-2019-2.jpg';
import featuredTalk12 from './assets/the_conf.jpg';

const featuredTalks = [
  {
    event: "Frontend Talks PRG • February, 2020",
    link: "/talks/the-best-is-yet-to-come-the-future-of-react",
    image: featuredTalk16,
    key: "featuredTalk16",
  },
  {
    event: "Frontend Talks BRN • February, 2020",
    link: "/talks/the-best-is-yet-to-come-the-future-of-react",
    image: featuredTalk15,
    key: "featuredTalk15",
  },
  {
    event: "Frontend Talks PRG • November, 2019",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalk14,
    key: "featuredTalk14",
  },
  {
    event: "Frontend Talks BRN • November, 2019",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalk13,
    key: "featuredTalk13",
  },
  {
    event: "The Conf • 2019",
    link: "/talks/the-day-i-reverse-engineered-a-gameboy-advance-game",
    image: featuredTalk12,
    key: "featuredTalk12",
  },
  {
    event: "TDC 2019 • São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalk11,
    key: "featuredTalk11",
  },
  {
    event: "TDC 2019 • São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalk10,
    key: "featuredTalk10",
  },
  {
    event: "TDC 2019 • Belo Horizonte",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk09,
    key: "featuredTalk09",
  },
  {
    event: "TDC 2019 • Belo Horizonte",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalk08,
    key: "featuredTalk08",
  },
  {
    event: "TDC 2019 • Florianópolis",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk07,
    key: "featuredTalk07",
  },
  {
    event: "Natal Tech Conference • 2019",
    link: "/talks/the-hitchhikers-guide-to-the-front-end-performance",
    image: featuredTalk06,
    key: "featuredTalk06",
  },
  {
    event: "React NYC • October, 2018",
    link: "/talks/state-of-the-art-react-development-flow-with-typescript",
    image: featuredTalk05,
    key: "featuredTalk05",
  },
  {
    event: "Front In Fortaleza • 2018",
    link: "/talks/the-hitchhikers-guide-to-the-front-end-performance",
    image: featuredTalk04,
    key: "featuredTalk04",
  },
  {
    event: "PHPeste • 2017",
    link: "/talks/the-correctness-by-design-duck-will-bite-php",
    image: featuredTalk03,
    key: "featuredTalk03",
  },
  {
    event: "CEJS • 2017",
    link: "/talks/sweet-macros-o-mine",
    image: featuredTalk02,
    key: "featuredTalk02",
  },
  {
    event: "CEJS • 2016",
    link: "/talks/javascript-in-the-sky-with-types",
    image: featuredTalk01,
    key: "featuredTalk01",
  },
];

export const getFeaturedTalks = () => shuffleItems(featuredTalks).slice(0, 9);
