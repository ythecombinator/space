import Image from 'next/image';
import { useRouter } from 'next/router';

import { Routes, siteMetadata } from 'config/constants';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const memojiRecord = {
  about: 'screaming',
  talks: 'punch',
  posts: 'exploding',
  _: 'thinking',
};

function memojiForPath(path: string) {
  if (path.includes(Routes.about)) {
    return memojiRecord.about;
  }

  if (path.includes(Routes.posts)) {
    return memojiRecord.posts;
  }

  if (path.includes(Routes.talks)) {
    return memojiRecord.talks;
  }

  return memojiRecord._;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Logo: React.FunctionComponent<{}> = () => {
  const { route } = useRouter();
  const memoji = memojiForPath(route);

  return (
    <Image
      className="w-12 hover:animate-wave"
      width={48}
      height={48}
      src={`/content/me/${memoji}.png`}
      alt={siteMetadata.author}
      loading='eager'
    />
  );
};

export default Logo;
