import { FC } from 'react';
import { Themed } from 'theme-ui';

import CardFooter from '../CardFooter';
import CardSubtitle from '../CardSubtitle';
import CardTitle from '../CardTitle';
import * as styles from './CardBody.styles';

/*~
 * TYPES
 */

export type CardBodyProps = {
  title: string;
  subtitle: string;
  contents?: JSX.Element;
};

/*~
 * COMPONENT
 */

const CardBody: FC<CardBodyProps> = (props) => {
  const { title, subtitle, contents, children } = props;

  return (
    <Themed.div sx={styles.container}>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardTitle>{title}</CardTitle>
      <CardFooter>{contents}</CardFooter>
      {children}
    </Themed.div>
  );
};

export default CardBody;
