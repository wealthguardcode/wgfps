import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const policies = [
  {
    name: 'Term Life Insurance',
    href: '/insurance/term-life-insurance',
  },
  {
    name: 'Universal Life Insurance',
    href: '/insurance/universal-life-insurance',
  },

  {
    name: 'Guaranteed Issue Whole Life Insurance',
    href: '/insurance/guaranteed-issue-whole-life-insurance',
  },
  {
    name: 'Mortgage Protection',
    href: '/insurance/mortgage-protection',
  },
  {
    name: 'All Policies',
    href: '/insurance/policies',
  },
]
const medicare = [
  {
    name: 'Medicare Parts A-D',
    href: '/medicare/ad',
  },
  {
    name: 'Medicare Advantage',
    href: '/medicare/advantage',
  },
  {
    name: 'Medicare Supplement',
    href: '/medicare/supplement',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }


  return (
    <>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-sm lg:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Life Insurance</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    {policies.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          router.asPath === item.href
                            ? '-m-3 p-3 block rounded-md text-blue-600 bg-gray-100 transition ease-in-out duration-150'
                            : '-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150'
                        }
                        onClick={newPathName}
                        pathname={pathName}>
                        <p className='text-base font-medium '>{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-sm lg:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <span>Medicare</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    {medicare.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          router.asPath === item.href
                            ? '-m-3 p-3 block rounded-md bg-gray-100 text-blue-600 transition ease-in-out duration-150'
                            : '-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 text-gray-900'
                        }
                        onClick={newPathName}
                        pathname={pathName}>
                        <p className='text-base font-medium '>{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button
              className={classNames(
                router.pathname === '/annuities'
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-sm lg:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}
              onClick={newPathName}
              pathname={pathName}>
              <Link href='/annuities'>
                <a className=''>
                  <span>Annuities</span>
                </a>
              </Link>
            </Popover.Button>
          </>
        )}
      </Popover>
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button
              className={classNames(
                router.pathname === '/employee'
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center mt-5 text-sm lg:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}>
              <Link href='/employee'>
                <a>
                  <span>Employee Benefits</span>
                </a>
              </Link>
            </Popover.Button>
          </>
        )}
      </Popover>
    </>
  )
}
