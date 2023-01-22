import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import { FunctionComponent } from 'react';

import SectionContainer from 'components/shared/section-container';

/*~
 * TYPES
 */

export type OverviewSectionProps = {
  abstract: ContentfulDocument;
};

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<OverviewSectionProps> = (props) => {
  const { abstract } = props;

  return (
    <SectionContainer>
      {documentToReactComponents(abstract, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, children) => (
            <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
              {children}
            </p>
          ),
        },
      })}
    </SectionContainer>
  );
};

export default OverviewSection;
