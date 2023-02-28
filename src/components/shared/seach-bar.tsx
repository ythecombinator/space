import {
  FunctionComponent,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { FaSearch } from 'react-icons/fa';

/*~
 * TYPES
 */

export type SearchBarProps = {
  label: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
};

/*~
 * COMPONENT
 */

const SearchBar: FunctionComponent<PropsWithChildren<SearchBarProps>> = ({
  label,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        aria-label={label}
        type="text"
        onChange={onChange}
        placeholder={label}
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
      />
      <FaSearch
        aria-hidden
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
      />
    </div>
  );
};

export default SearchBar;
