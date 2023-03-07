import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import Highlight from 'components/shared/typography/highlight';

/*~
 * COMPONENT
 */

const Mark: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLElement>>
> = ({ children }) => {
  return (
    <Highlight color="amber" customElement="mark" multiline>
      {children}
    </Highlight>
  );
};

export default Mark;
