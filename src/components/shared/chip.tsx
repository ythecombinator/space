import { FunctionComponent, PropsWithChildren } from 'react';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Chip: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <span className="group relative mr-4 inline-block text-sm font-medium text-blue-700 no-underline dark:text-blue-300">
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-blue-700 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-blue-300"></span>
      <em className="relative block border border-current bg-white px-2 py-1 dark:bg-gray-800">{children}</em>
    </span>
  );
};

export default Chip;
