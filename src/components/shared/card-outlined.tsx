import { FunctionComponent, PropsWithChildren } from 'react';

import { randomElement } from 'utils/array';
import { classNames, gradients } from 'utils/styles';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

export type CardOutlinedProps = {
  heading: string;
  href?: string;
};

/*~
 * UTILS
 */

/*~
 * COMPONENT
 */

const CardOutlined: FunctionComponent<PropsWithChildren<CardOutlinedProps>> = ({
  heading,
  href,
  children,
}) => {
  const gradientClasses = randomElement(gradients);
  const Wrapper = href ? Link : 'div';

  return (
    <Wrapper
      className="group transform transition-all duration-500 hover:scale-[1.05] hover:duration-500"
      href={href}
    >
      <div
        className={classNames(
          'absolute -inset-[2.4px] rounded-2xl bg-gray-100 transition duration-1000 group-hover:bg-gradient-to-r group-hover:blur-md group-hover:duration-500 dark:bg-gray-800',
          gradientClasses
        )}
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
    </Wrapper>
  );
};

export default CardOutlined;
