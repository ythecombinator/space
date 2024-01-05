import { FunctionComponent, PropsWithChildren } from 'react';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export const LayoutGradient: FunctionComponent<PropsWithChildren<{}>> = () => {
  return (
    <div className="pointer-events-none z-[-1] mx-auto max-w-6xl">
      <div className="absolute inset-x-0 h-[200px] rounded-t-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 opacity-20 blur-3xl" />
    </div>
  );
};

export default LayoutGradient;
