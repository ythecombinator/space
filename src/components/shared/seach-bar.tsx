import { FunctionComponent, InputHTMLAttributes } from 'react';

/*~
 * TYPES
 */

export type SeachBarProps = {
  label: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
};

/*~
 * COMPONENT
 */

const SeachBar: FunctionComponent<SeachBarProps> = ({ label, onChange }) => {
  return (
    <div className="relative">
      <input
        aria-label={label}
        type="text"
        onChange={onChange}
        placeholder={label}
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SeachBar;
