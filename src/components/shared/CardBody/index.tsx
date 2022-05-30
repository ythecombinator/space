import { FC } from 'react';
import { Themed } from 'theme-ui';

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
    <Themed.div sx={styles.container}>
      <Themed.h6 sx={styles.subtitle}>{subtitle}</Themed.h6>
      <Themed.h4 sx={styles.title}>{title}</Themed.h4>
      <div sx={styles.content}>{contents}</div>
      {children}
    </Themed.div>
  );
};

export default CardBody;
