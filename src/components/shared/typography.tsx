import { useTheme } from 'next-themes';
import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';
import { RoughNotation, RoughNotationProps } from 'react-rough-notation';
import colors from 'tailwindcss/colors';

import fonts from 'utils/fonts';
import { hexToRGBA } from 'utils/styles';
import { classNames } from 'utils/styles';

import Link, { LinkProps } from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  UI: Typography.a
//  ---------------------------------------------------------------------------

const Anchor: FunctionComponent<LinkProps> = ({ className, href, ...props }) => {
  return <Link className={classNames(className)} target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

//  ---------------------------------------------------------------------------
//  UI: Typography.h1
//  ---------------------------------------------------------------------------

const Heading1: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={classNames(
        'text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl',
        fonts.neuzeitGrotesk,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.h2
//  ---------------------------------------------------------------------------

const Heading2: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={classNames(
        'font-bold text-2xl md:text-3xl tracking-tight my-4 text-black dark:text-white',
        fonts.neuzeitGrotesk,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.h3
//  ---------------------------------------------------------------------------

const Heading3: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={classNames('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', fonts.neuzeitGrotesk, className)}
      {...props}
    >
      {children}
    </h3>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.highlight
//  ---------------------------------------------------------------------------

interface HighlightProps extends Omit<RoughNotationProps, 'type' | 'show' | 'color'> {
  color: keyof typeof colors;
}

const Highlight: FunctionComponent<PropsWithChildren<HighlightProps>> = ({ children, color, ...props }) => {
  const { theme } = useTheme();
  const palette = theme === 'dark' ? colors[color][800] : colors[color][300];

  return (
    <RoughNotation type="highlight" show={true} color={hexToRGBA(palette, 0.3)} {...props}>
      {children}
    </RoughNotation>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.lead
//  ---------------------------------------------------------------------------

const Lead: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({ children, ...props }) => {
  return (
    <p className="text-xl font-semibold leading-8 tracking-tight" {...props}>
      {children}
    </p>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.mark
//  ---------------------------------------------------------------------------

const Mark: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({ children }) => {
  return (
    <Highlight color="indigo" customElement="mark" multiline>
      {children}
    </Highlight>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.P
//  ---------------------------------------------------------------------------

const Paragraph: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={classNames('leading-7 text-gray-500 my-2 dark:text-gray-400', className)} {...props}>
      {children}
    </p>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.small
//  ---------------------------------------------------------------------------

const Small: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <small className={classNames('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  );
};

//  ---------------------------------------------------------------------------
//  UI: Typography.subtle
//  ---------------------------------------------------------------------------

const Subtle: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({ children, ...props }) => {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400" {...props}>
      {children}
    </p>
  );
};

//  ---------------------------------------------------------------------------
//  UI: API
//  ---------------------------------------------------------------------------

const Typography = {
  mark: Mark,
  a: Anchor,
  lead: Lead,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  subtle: Subtle,
  small: Small,
  highlight: Highlight,
};

export default Typography;
