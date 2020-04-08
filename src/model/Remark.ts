type PostType = "blog_entry" | "talk";

export interface Frontmatter {
  title: string;
  description: string;
  image: string;
  date: string;
  path: string;
  type: PostType;
  thumbnail?: string;
}

interface Node {
  id: string;
  frontmatter: Frontmatter;
}

export interface EdgesEntity {
  node: Node;
}

export interface AllMarkdownRemark {
  edges: EdgesEntity[];
}
