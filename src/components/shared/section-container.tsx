import { FunctionComponent, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

interface SectionContainerProps {
  className?: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export const SectionContainer: FunctionComponent<PropsWithChildren<SectionContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={classNames('pt-6 pb-4 space-y-2 md:space-y-5', className)}>{children}</div>;
};

export default SectionContainer;
