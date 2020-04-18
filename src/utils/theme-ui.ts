import {ComponentType, ElementType} from 'react';

import {GatsbyLinkProps} from 'gatsby';
import {IntrinsicSxElements, Styled} from 'theme-ui';

type LinkProps = GatsbyLinkProps<any> &
  IntrinsicSxElements["a"] & {
    as?: ElementType;
  };

type LinkComponent = ComponentType<LinkProps>;

export const StyledGatsbyLink = (Styled.a as unknown) as LinkComponent;
