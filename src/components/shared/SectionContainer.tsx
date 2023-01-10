import { FunctionComponent } from 'react';

export const SectionContainer: FunctionComponent<{}> = ({ children }) => {
  return <div className="pt-6 pb-4 space-y-2 md:space-y-5">{children}</div>;
};

export default SectionContainer;
