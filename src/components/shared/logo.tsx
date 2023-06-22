import Image from 'next/image';

import { siteMetadata } from 'config/constants';

import { randomElement } from 'utils/array';

const memojis = ['exploding', 'punch', 'screaming', 'thinking'];

const Logo: React.FunctionComponent<{}> = () => {
  const me = randomElement(memojis);

  return (
    <Image
      className="hover:animate-wave w-12"
      width={48}
      height={48}
      src={`/content/me/${me}.png`}
      alt={siteMetadata.author}
    />
  );
};

export default Logo;
