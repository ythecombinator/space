import {shuffleItems} from 'utils/array';

import featuredTalkA from './assets/2017/cejs.jpg';
import featuredTalkB from './assets/2017/phpeste.jpg';
import featuredTalkC from './assets/2018/front-in-fortaleza.jpg';
import featuredTalkD from './assets/2018/react-nyc.jpg';
import featuredTalkE from './assets/2019/frontend-talks-brn.jpg';
import featuredTalkF from './assets/2019/frontend-talks-prg.jpg';
import featuredTalkG from './assets/2019/tdc-bh-1.jpg';
import featuredTalkH from './assets/2019/tdc-bh-2.jpg';
import featuredTalkI from './assets/2019/tdc-florianopolis.jpg';
import featuredTalkJ from './assets/2019/tdc-sp-1.jpg';
import featuredTalkK from './assets/2019/tdc-sp-2.jpg';
import featuredTalkL from './assets/2019/the-conf.jpg';
import featuredTalkM from './assets/2020/frontend-talks-brn.jpg';
import featuredTalkN from './assets/2020/frontend-talks-prg.jpg';
import featuredTalkO from './assets/2022/devconf-pl.jpg';
import featuredTalkP from './assets/2022/react-advanced.jpg';
import featuredTalkQ from './assets/2022/react-alicante.jpg';
import featuredTalkR from './assets/2022/react-brussels.jpg';
import featuredTalkS from './assets/2022/react-india.jpg';
import featuredTalkT from './assets/2022/react-next.jpg';
import featuredTalkU from './assets/2022/react-summit.jpg';

const featuredTalks = [
  {
    event: "React Advanced London • October, 2022",
    link: "/talks/deep-diving-on-concurrent-react",
    image: featuredTalkP,
    key: "featuredTalkP",
  },
  {
    event: "React Brussels • October, 2022",
    link: "/talks/deep-diving-on-concurrent-react",
    image: featuredTalkR,
    key: "featuredTalkR",
  },
  {
    event: "React Alicante • October, 2022",
    link: "/talks/inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for",
    image: featuredTalkQ,
    key: "featuredTalkQ",
  },
  {
    event: "React India • September, 2022",
    link: "/talks/deep-diving-on-concurrent-react",
    image: featuredTalkS,
    key: "featuredTalkS",
  },
  {
    event: "DevConf PL • September, 2022",
    link:
      "/talks/consistent-ux-at-scale-lessons-learned-when-i-wore-the-design-ops-hat",
    image: featuredTalkO,
    key: "featuredTalkO",
  },
  {
    event: "React Next • June, 2022",
    link: "/talks/inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for",
    image: featuredTalkT,
    key: "featuredTalkT",
  },
  {
    event: "React Summit • June, 2022",
    link: "/talks/inside-fiber-the-in-depth-overview-you-wanted-a-tldr-for",
    image: featuredTalkU,
    key: "featuredTalkU",
  },
  {
    event: "Frontend Talks PRG • February, 2020",
    link: "/talks/the-best-is-yet-to-come-the-future-of-react",
    image: featuredTalkN,
    key: "featuredTalkN",
  },
  {
    event: "Frontend Talks BRN • February, 2020",
    link: "/talks/the-best-is-yet-to-come-the-future-of-react",
    image: featuredTalkM,
    key: "featuredTalkM",
  },
  {
    event: "Frontend Talks PRG • November, 2019",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalkF,
    key: "featuredTalkF",
  },
  {
    event: "Frontend Talks BRN • November, 2019",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalkE,
    key: "featuredTalkE",
  },
  {
    event: "The Conf • 2019",
    link: "/talks/the-day-i-reverse-engineered-a-gameboy-advance-game",
    image: featuredTalkL,
    key: "featuredTalkL",
  },
  {
    event: "TDC 2019 • São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalkJ,
    key: "featuredTalkJ",
  },
  {
    event: "TDC 2019 • São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalkK,
    key: "featuredTalkK",
  },
  {
    event: "TDC 2019 • Belo Horizonte",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalkG,
    key: "featuredTalkG",
  },
  {
    event: "TDC 2019 • Belo Horizonte",
    link: "/talks/react-16-dot-x-way-beyond-hooks",
    image: featuredTalkH,
    key: "featuredTalkH",
  },
  {
    event: "TDC 2019 • Florianópolis",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalkI,
    key: "featuredTalkI",
  },
  {
    event: "React NYC • October, 2018",
    link: "/talks/state-of-the-art-react-development-flow-with-typescript",
    image: featuredTalkD,
    key: "featuredTalkD",
  },
  {
    event: "Front In Fortaleza • 2018",
    link: "/talks/the-hitchhikers-guide-to-the-front-end-performance",
    image: featuredTalkC,
    key: "featuredTalkC",
  },
  {
    event: "PHPeste • 2017",
    link: "/talks/the-correctness-by-design-duck-will-bite-php",
    image: featuredTalkB,
    key: "featuredTalkB",
  },
  {
    event: "CEJS • 2017",
    link: "/talks/sweet-macros-o-mine",
    image: featuredTalkA,
    key: "featuredTalkA",
  },
];

export const getFeaturedTalks = () => shuffleItems(featuredTalks).slice(0, 9);
