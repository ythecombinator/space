import { FC } from 'react';
import { Link as TLink } from 'theme-ui';

import { externalLinks } from 'config/constants';

import HeaderExternalLinkIcon from 'components/shared/HeaderExternalLinkIcon';

import * as styles from './HeaderExternalLinks.styles';

/*~
 * COMPONENT
 */

const HeaderExternalLinks: FC = () => {
  return (
    <div sx={styles.container}>
      {externalLinks.map((link) => (
        <TLink key={link.url} href={link.url}>
          <HeaderExternalLinkIcon identifier={link.name} />
        </TLink>
      ))}
    </div>
  );
};

export default HeaderExternalLinks;
