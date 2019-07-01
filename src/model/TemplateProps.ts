import {Frontmatter} from './Remark';

interface MarkdownRemark {
  html: string;
  frontmatter: Frontmatter;
}

export interface TemplateProps {
  location: Location;
  data: {
    markdownRemark: MarkdownRemark;
  };
}
