declare module 'rehype-citation' {
  import type { Plugin } from 'unified';

  interface RehypeCitationOptions {
    path?: string;
  }

  const rehypeCitation: Plugin<[RehypeCitationOptions?]>;
  export default rehypeCitation;
}
