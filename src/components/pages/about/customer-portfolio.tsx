import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent } from 'react';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface LogoProps {
  name: string;
  logo: string;
}

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const customers = [
  {
    name: 'Outfront Media',
    logo: 'ofm',
    link: `https://www.outfrontmedia.com/`,
  },
  {
    name: 'Minted',
    logo: 'minted',
    link: `https://www.minted.com/`,
  },
  {
    name: 'Rebel Girls',
    logo: 'rebel_girls',
    link: `https://www.rebelgirls.com/`,
  },
  {
    name: 'Bredal Australia',
    logo: 'bredal',
    link: `https://www.bredal.com.au/`,
  },

  {
    name: 'Live Penalty',
    logo: 'live_penalty',
    link: `https://www.livepenalty.com/`,
  },
];

const duration = 20;

const animation = [
  {
    x: ['0%', '-100%'],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
    },
  },
  {
    x: ['100%', '0%'],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
    },
  },
];

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Logo: FunctionComponent<LogoProps> = ({ name, logo }) => {
  return (
    <div className="flex w-[200px] justify-center items-center px-4">
      <Image
        className="object-contain object-center"
        src={`/content/clients/${logo}.png`}
        alt={name}
        width={180}
        height={120}
      />
    </div>
  );
};

const CustomerPortfolio: FunctionComponent<{}> = () => {
  return (
    <div className="w-full rounded-xl shadow-sm border p-2 mt-8 mb-8">
      <motion.div className="relative flex overflow-x-hidden mx-auto">
        <div className="w-full h-full absolute left-0 top-0 z-10 bg-gradient-to-r from-white to-white/0 dark:from-black dark:to-black/0"></div>
        <motion.div animate={animation[0]} className="flex">
          {customers.map((customer) => {
            return <Logo key={customer.name} {...customer} />;
          })}
        </motion.div>
        <motion.div animate={animation[1]} className="flex absolute top-0">
          {customers.map((customer) => {
            return <Logo key={customer.name} {...customer} />;
          })}
        </motion.div>
        <div className="w-24 h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-white/0 dark:from-black dark:to-black/0"></div>
      </motion.div>
    </div>
  );
};

export default CustomerPortfolio;
