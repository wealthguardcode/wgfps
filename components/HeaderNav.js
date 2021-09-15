import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Blog',
    description: 'Learn about tips, product updates and company culture.',
    href: '#',
  },
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'Check out webinars with experts and learn about our annual conference.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
]
const policies = [
  {
    name: 'Term Life Insurance',
    description: 'Learn about tips, product updates and company culture.',
    href: '#',
  },
  {
    name: 'Quality of Life Insurance',
    description:
      'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  {
    name: 'Permanent Life Insurance',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Universal Life Insurance',
    description:
      'Check out webinars with experts and learn about our annual conference.',
    href: '#',
  },
  {
    name: 'Whole Life Insurance',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
  {
    name: 'Guaranteed Issue Whole Life Insurance',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
  {
    name: 'Accidental Death Insurance',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
]
const learn = [
  {
    name: 'Life Insurance',
    description: 'Learn about tips, product updates and company culture.',
    href: '#',
  },
  {
    name: 'What is Life Insurance',
    description:
      'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  {
    name: 'How Does Life Insurance Work',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Choosing a Life Insurance Policy',
    description:
      'Check out webinars with experts and learn about our annual conference.',
    href: '#',
  },
  {
    name: 'Which Type of Life Insurance Policy Do I Need',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
  {
    name: 'What to Expect When You Apply for Life Insurance',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
  {
    name: 'Life Insurance Medical Exam',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
]
const whyWig = [
  {
    name: 'Why WIG?',
    description: 'Learn about tips, product updates and company culture.',
    href: '#',
  },
  {
    name: 'About Us',
    description:
      'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  {
    name: 'Customer Reviews',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Our History',
    description:
      'Check out webinars with experts and learn about our annual conference.',
    href: '#',
  },
]
const help = [
  {
    name: 'FAQ',
    description: 'Learn about tips, product updates and company culture.',
    href: '#',
  },
  {
    name: 'Coverage Calculator',
    description:
      'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  {
    name: 'COVID-19 Update',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Contact Us',
    description:
      'Check out webinars with experts and learn about our annual conference.',
    href: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Our Policies</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {policies.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p> */}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Learn & Plan</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {learn.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p> */}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Why WIG?</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {whyWig.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p> */}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Help</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {help.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p> */}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
