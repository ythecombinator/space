import { FunctionComponent } from 'react';
import { FaMapMarkedAlt, FaYoutube, FaSpeakerDeck } from 'react-icons/fa';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

interface SocialNetworkLinkProps {
  href: string;
}

/*~
 * COMPONENT
 */

export const SocialNetworkLink: FunctionComponent<SocialNetworkLinkProps> = ({
  href,
  children,
}) => {
  return (
    <Link
      className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
      href={href}
      target="_blank"
    >
      <FaMapMarkedAlt />
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
};

export default SocialNetworkLink;
