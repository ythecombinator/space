import { FC } from 'react';
import { siteTitle } from 'src/config/constants';

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>Made with 💖 while high either on ☕ or 🍻 — or both.</div>
    </footer>
  );
};

export default Footer;
