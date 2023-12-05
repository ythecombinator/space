import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import { FunctionComponent, PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

export type OverviewSectionProps = {
  abstract: ContentfulDocument;
};

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<PropsWithChildren<OverviewSectionProps>> = (props) => {
  const { abstract } = props;

  return (
    <SectionContainer>
      {documentToReactComponents(abstract, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, children) => <Typography.p>{children}</Typography.p>,
        },
      })}
    </SectionContainer>
  );
};

export default OverviewSection;
