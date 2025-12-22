import { FunctionComponent, PropsWithChildren } from 'react';

import { ScrollArea, ScrollBar } from 'components/shared/scroll-area';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const CardScrollArea: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full flex-wrap pb-2">
      <ScrollArea>
        <div className="flex space-x-4 pb-4">{children}</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CardScrollArea;
