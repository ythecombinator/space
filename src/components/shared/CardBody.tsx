import { PropsWithChildren } from 'react';
import { Themed } from 'theme-ui';

import CardFooter from 'components/shared/CardFooter';
import CardSubtitle from 'components/shared/CardSubtitle';
import CardTitle from 'components/shared/CardTitle';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type CardBodyProps = PropsWithChildren<{
  title: string;
  subtitle: string;
  contents?: JSX.Element;
}>;

/*~
 * STYLES
 */

const styles = buildStyleObject({
  container: {
    padding: '15px',
    width: '100%',
    whiteSpace: 'normal',
  },
});

/*~
 * COMPONENT
 */

const CardBody = (props: CardBodyProps) => {
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
