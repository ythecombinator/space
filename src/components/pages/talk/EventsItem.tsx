import Link from 'components/Link';
import { FC } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import { Routes } from 'config/constants';

import { randomElement } from 'utils/array';

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
 * TYPES
 */

export type EventsItemProps = {
  // Event
  eventName: string;
  eventLocation: string;
  eventStartingDate: string;
  eventEndingDate: string;
  // Session
  sessionAudience: string;
  sessionLanguage: string;
  sessionOnline: boolean;
  sessionSlides: string;
  sessionRecording: string;
};

/*~
 * COMPONENT
 */

const EventsItem: FC<EventsItemProps> = (props) => {
  const {
    eventName,
    eventLocation,
    sessionLanguage,
    sessionSlides,
    sessionRecording,
  } = props;
  const gradient = randomElement(gradients);

  return (
    <Link
      href={`/${Routes.talks}`}
      key={eventName}
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
                  {eventName}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
              <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
                <FaMapMarkedAlt size={20} />
              </div>
              {eventLocation}
            </div>
            <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
              <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
                <FaMapMarkedAlt size={20} />
              </div>
              {eventLocation}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default EventsItem;
