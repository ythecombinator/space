import { FunctionComponent } from 'react';

import { randomElement } from 'utils/array';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

export type CardOutlinedProps = {
  heading: string;
  href: string;
};

/*~
 * UTILS
 */

const gradients = [
  ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  ' from-[#D8B4FE] to-[#818CF8]',
  ' to-[#6EE7B7] from-[#6EE7F9]',
  ' from-pink-500 via-red-500 to-yellow-500',
  ' from-yellow-100 via-yellow-300 to-yellow-500',
  ' from-indigo-200 via-red-200 to-yellow-100',
  ' from-green-200 via-green-400 to-purple-700',
  ' from-red-200 to-red-600',
  ' from-green-300 via-yellow-300 to-pink-300',
  ' from-pink-400 to-pink-600',
  ' from-sky-400 via-rose-400 to-lime-400',
];

/*~
 * COMPONENT
 */

const CardOutlined: FunctionComponent<CardOutlinedProps> = (props) => {
  const { heading, href, children } = props;
  const gradient = randomElement(gradients);

  return (
    <Link
      href={href}
      className="group transform transition-all duration-500 hover:scale-[1.05] hover:duration-500"
    >
      <div
        className={
          'absolute -inset-[2.4px] rounded-2xl bg-gray-100 transition duration-1000 group-hover:bg-gradient-to-r group-hover:blur-md group-hover:duration-500 dark:bg-gray-800' +
          gradient
        }
      ></div>
      <article className="relative h-full w-full rounded-xl">
        <div className="flex h-full w-full flex-col justify-between rounded-xl bg-white p-5 dark:bg-background-color">
          <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-10 flex">{children}</div>
        </div>
      </article>
    </Link>
  );
};

export default CardOutlined;
