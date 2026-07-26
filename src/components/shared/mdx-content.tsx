import * as runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';

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
  return <Component components={components} {...rest} />;
}

export default MDXContent;
