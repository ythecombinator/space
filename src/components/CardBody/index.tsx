import { FC } from 'react';

import CardLink from 'components/CardLink';

import * as styles from './CardBody.styles';

/*~
 * TYPES
 */

export type CardBodyProps = {
  title: string;
  subtitle: string;
  contents: JSX.Element;
};

/*~
 * COMPONENT
 */

const CardBody: FC<CardBodyProps> = (props) => {
  const { title, subtitle, contents, children } = props;

  return (
    <div sx={styles.container}>
      <p sx={styles.subtitle}>{subtitle}</p>

      <p sx={styles.title}>{title}</p>

      <div sx={styles.content}>{contents}</div>

      {children}
    </div>
  );
};

export default CardBody;
