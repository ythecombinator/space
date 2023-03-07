import { FunctionComponent } from 'react';
import { RoughNotation } from 'react-rough-notation';
import colors from 'tailwindcss/colors';

import { classNames } from 'utils/styles';

import Link, { LinkProps } from 'components/shared/link';

/*~
 * COMPONENT
 */

const A: FunctionComponent<LinkProps> = ({ className, href, ...props }) => {
  return (
    <RoughNotation
      type="underline"
      show={true}
      color={colors.teal[500]}
      animationDelay={800}
      animationDuration={1200}
      multiline
    >
      <Link
        className={classNames('not-prose', className)}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...props}
      />
    </RoughNotation>
  );
};

export default A;
