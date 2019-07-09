import {AllMarkdownRemark} from './Remark';

export interface PageProps {
  location: Location;
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
}
