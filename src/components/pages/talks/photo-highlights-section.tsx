import { PropsWithChildren, useMemo } from 'react';

import { FeaturedTalk } from 'services/content/talks';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import PhotoHighlightsSectionItem from 'components/pages/talks/photo-highlights-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PhotoHighlightsSectionProps = {
  items: Array<FeaturedTalk>;
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function splitIntoRows(items: FeaturedTalk[], rowCount: number = 3): FeaturedTalk[][] {
  const rowSize = Math.ceil(items.length / rowCount);
  return Array.from({ length: rowCount }, (_, i) => items.slice(i * rowSize, (i + 1) * rowSize));
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function PhotoHighlightsSection({ items }: PropsWithChildren<PhotoHighlightsSectionProps>) {
  const rows = useMemo(() => splitIntoRows(items), [items]);

  return (
    <SectionContainer>
      <SectionHeading title="Captured Highlights" />

      {/* Mobile Grid View */}
      <div className="mx-auto max-w-7xl md:hidden">
        <div className="grid grid-cols-1 gap-6">
          {items.map((item) => (
            <PhotoHighlightsSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
          ))}
        </div>
      </div>

      {/* Desktop Marquee View */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] hidden w-screen overflow-hidden py-12 md:block">
        <div className="flex flex-col gap-6">
          {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative w-full overflow-hidden">
              <div
                className={`flex gap-6 will-change-transform ${
                  rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
                }`}
              >
                {Array(3)
                  .fill(row)
                  .flat()
                  .map((item, idx) => (
                    <div key={`row${rowIndex}-${idx}-${item.talkSlug}`} className="min-w-[400px] md:min-w-[500px]">
                      <PhotoHighlightsSectionItem {...item} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default PhotoHighlightsSection;
