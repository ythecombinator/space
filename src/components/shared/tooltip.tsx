import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { FunctionComponent, PropsWithChildren, ReactNode, useState } from 'react';

import { useWindowSize } from 'utils/window';

import Leaflet from 'components/shared/leaflet';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type TooltipProps = {
  content: ReactNode | string;
  fullWidth?: boolean;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Tooltip: FunctionComponent<PropsWithChildren<TooltipProps>> = ({ children, content, fullWidth }) => {
  const [openTooltip, setOpenTooltip] = useState(false);

  const { isMobile, isDesktop } = useWindowSize();

  return (
    <>
      {isMobile && (
        <button
          type="button"
          className={`${fullWidth ? 'w-full' : 'inline-flex'} sm:hidden`}
          onClick={() => setOpenTooltip(true)}
        >
          {children}
        </button>
      )}
      {openTooltip && isMobile && (
        <Leaflet setShow={setOpenTooltip}>
          {typeof content === 'string' ? (
            <span className="flex min-h-[150px] w-full items-center justify-center bg-gray-100 px-10 text-center text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {content}
            </span>
          ) : (
            content
          )}
        </Leaflet>
      )}
      {isDesktop && (
        <TooltipPrimitive.Provider delayDuration={100}>
          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger className="hidden sm:inline-flex" asChild>
              {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content
              sideOffset={4}
              side="top"
              className="z-30 hidden items-center overflow-hidden rounded-md border border-gray-200 bg-gray-100 drop-shadow-lg dark:bg-gray-800 sm:block"
            >
              <TooltipPrimitive.Arrow className="fill-current text-gray-800 dark:text-gray-200" />
              {typeof content === 'string' ? (
                <div className="p-5">
                  <span className="block max-w-xs text-center text-sm text-gray-800 dark:text-gray-200">{content}</span>
                </div>
              ) : (
                content
              )}
              <TooltipPrimitive.Arrow className="fill-current text-gray-800 dark:text-gray-200" />
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
      )}
    </>
  );
};

export default Tooltip;
