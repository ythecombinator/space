import { FC } from 'react';
import { Link as TLink } from 'theme-ui';

import { externalLinks } from 'config/constants';

import HeaderExternalLinkIcon from 'components/HeaderExternalLinkIcon';

/*~
 * COMPONENT
 */

const HeaderExternalLinks: FC = () => {
  return (
    <div sx={{ 'a:not(:first-of-type)': { ml: 3 }, fontSize: [1, `18px`] }}>
      {externalLinks.map((link) => (
        <TLink key={link.url} href={link.url}>
          <HeaderExternalLinkIcon identifier={link.name} />
        </TLink>
      ))}
    </div>
  );
};

export default HeaderExternalLinks;
