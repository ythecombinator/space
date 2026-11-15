import { ComponentType } from 'react';
import * as runtime from 'react/jsx-runtime';

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default as ComponentType<Record<string, unknown>>;
}

interface MDXContentProps {
  code: string;
  components?: Record<string, ComponentType<any> | object>;
  [key: string]: unknown;
}

function MDXContent({ code, components, ...rest }: MDXContentProps) {
  const Component = useMDXComponent(code);
  // Compiled MDX is a component factory and has to be created from `code`.
  // eslint-disable-next-line react-hooks/static-components
  return <Component components={components} {...rest} />;
}

export default MDXContent;
