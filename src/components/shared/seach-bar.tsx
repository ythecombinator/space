import { FunctionComponent, InputHTMLAttributes, PropsWithChildren } from 'react';
import { FaSearch } from 'react-icons/fa';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type SearchBarProps = {
  label: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const SearchBar: FunctionComponent<PropsWithChildren<SearchBarProps>> = ({ label, onChange }) => {
  return (
    <div className="relative">
      <input
        aria-label={label}
        type="text"
        onChange={onChange}
        placeholder={label}
        className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <FaSearch aria-hidden className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" />
    </div>
  );
};

export default SearchBar;
