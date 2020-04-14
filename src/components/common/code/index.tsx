import React, {FunctionComponent} from 'react';

import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

import useConfig from 'hooks/use-config';

import {Language} from 'model/Prism';

import {calculateLinesToHighlight, getParams} from './utils';

interface Props {
  codeString: string;
  language: Language;
  noLineNumbers?: boolean;
  metastring?: string;
  [key: string]: any;
}

const Code: FunctionComponent<Props> = (props) => {
  const {
    codeString,
    noLineNumbers = false,
    className: blockClassName,
    metastring = ``,
    ...otherProps
  } = props;

  const { showLineNumbers } = useConfig();

  const [language, { title = `` }] = getParams(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  const hasLineNumbers =
    !noLineNumbers && language !== `noLineNumbers` && showLineNumbers;

  if (otherProps[`react-live`]) {
    return (
      <LiveProvider code={codeString} noInline theme={theme}>
        <LiveEditor data-name="live-editor" />
        <LiveError />
        <LivePreview data-name="live-preview" />
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="gatsby-highlight" data-language={language}>
            <pre
              className={className}
              style={style}
              data-linenumber={hasLineNumbers}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`;
                }

                return (
                  <div {...lineProps}>
                    {hasLineNumbers && (
                      <span className="line-number-style">{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          </div>
        </React.Fragment>
      )}
    </Highlight>
  );
};

export default Code;
