import { FunctionComponent } from 'react';

/*~
 * TYPES
 */

interface FooterExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

/*~
 * COMPONENT
 */

export const FooterExternalLink: FunctionComponent<FooterExternalLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default FooterExternalLink;
