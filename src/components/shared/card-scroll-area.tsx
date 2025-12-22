import { PropsWithChildren } from 'react';

import { ScrollArea, ScrollBar } from 'components/shared/scroll-area';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function CardScrollArea({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-wrap pb-2">
      <ScrollArea>
        <div className="flex space-x-4 pb-4">{children}</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default CardScrollArea;
