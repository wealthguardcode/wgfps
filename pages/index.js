import { ExternalLinkIcon, PhoneIcon } from '@heroicons/react/solid'

import Layout from '../components/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const EstimateWidget = dynamic(() => import('../components/EstimateWidget'), {
  fallback: <div>Loading...</div>,
})

const perks = [
  {
    name: 'Local team members',
    imageSrc:
      'https://media.graphcms.com/output=format:png/resize=,height:800,fit:max/aGNe7lOtSnu3jybWyi0W',
    description:
      'We may be strong as individuals but together we are invincible. Local and here to help.',
  },
  {
    name: 'Instant quote',
    imageSrc:
      'https://media.graphcms.com/output=format:png/resize=,height:800,fit:max/6GDa58lQVuKX1KROF0fA',
    description:
      'Real time quoting data on rates and/or product changes to help you have the latest prices.',
  },
  {
    name: 'Worry-free',
    imageSrc:
      'https://media.graphcms.com/output=format:png/resize=,height:800,fit:max/zFJTjtcITV6ybZ1bAh6d',
    description:
      'No worries, we’ve got you covered. Helping you attain your peace of mind.',
  },
  {
    name: 'Expert coverage',
    imageSrc:
      'https://media.graphcms.com/output=format:png/resize=,height:800,fit:max/LYN4OxQ7QtShPO4n0PG1',
    description:
      'With years of industry experience, providing you with more time and money in your wallet.',
  },
]

const faqs = [
  {
    id: 1,
    question: 'Do I need life insurance?',
    answer:
      'Not necessarily. If you have no children or dependents whom you support financially, you might not need a life insurance policy after all. Life insurance aims to provide a solution for those who seek income replacement, mortgage protection, estate planning, leaving a legacy, or burial expenses. However, if someone you love is dependent on you financially, you need life insurance.',
  },
  {
    id: 2,
    question: 'How Can I Save Money When Buying Life Insurance?',
    answer:
      'Buying a term life or a combination of term and whole life insurance may help you pay a lower premium. Buying a policy early in life is also a good way to ensure a lower premium.',
  },
  {
    id: 3,
    question: 'How does the insurance company determine my premium?',
    answer:
      'Premium rates are typically based on factors such as age, gender, height, weight, health status (including whether or not you use tobacco), and if you participate in high-risk activities or occupations.',
  },
  {
    id: 4,
    question: 'What is a term policy?',
    answer:
      'Term insurance plans cover you for a term of one or more years, and it pays a death benefit only if you die in that term. However, even if you don’t die within the term, you have not wasted your money any more than when you buy car insurance but never have an accident. You have bought yourself peace of mind that your beneficiaries will receive the death benefit if you should die within the term.',
  },
  {
    id: 5,
    question:
      'Am I still eligible for coverage if I have a serious health condition?',
    answer:
      'Most plans do require medical testing and charge premiums based on the level of risk they assign to you based on the testing. However, even if you are not in top health or have a serious health condition, there are still some options available with guaranteed issue plans, although this comes at the cost of a higher monthly premium and a lower death benefit.',
  },
  {
    id: 6,
    question: 'How much life insurance do I need?',
    answer:
      'To determine how much life insurance you need, it’s best to look at your surviving family’s immediate, ongoing, and future financial obligations, and compare that with your financial resources.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Life insurance</span>{' '}
              <span className='block text-blue-600 xl:inline'>made easy.</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Life is uncertain. People are not. Our life insurance will always
              be there for you when you need it most.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link href='/estimate' passHref>
                  <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'>
                    Check my price
                  </a>
                </Link>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='tel:832-930-3827'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  <PhoneIcon
                    className='-ml-0.5 mr-2 h-6 w-6'
                    aria-hidden='true'
                  />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
            alt=''
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className='h-3/4 bg-white md:mx-10 my-24'>
        <div className='bg-blue-50 grid grid-cols-1 md:grid-cols-2 pt-5 md:p-10'>
          <div className='col-span-1 flex-1 flex flex-col mt-2 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto  w-full max-w-sm lg:w-96'>
              <h2 className='lg:text-4xl text-3xl font-extrabold text-gray-900'>
                Get your estimate in seconds.
              </h2>
            </div>
          </div>

          <div className='h-auto w-full mt-8 mb-12 md:mt-5 md:mb-8'>
            <EstimateWidget />
          </div>
        </div>
      </div>

      {/* Kim Section */}

      <div className='relative py-16 bg-white'>
        <div
          className='hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block'
          aria-hidden='true'
        />
        <div className='max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent'>
              <div
                className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden'
                aria-hidden='true'
              />
              <div className='max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                  <img
                    className='object-cover object-center rounded-3xl shadow-2xl'
                    src='https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/eYrEvAm5S9WE6VDOB5rA'
                    alt='Kim Mair'
                  />
                </div>
              </div>
            </div>

            <div className='relative bg-blue-600 to-blue-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center'>
              <div
                className='hidden absolute inset-0 overflow-hidden rounded-3xl lg:block'
                aria-hidden='true'>
                <svg
                  className='absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-blue-400'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
                <svg
                  className='absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-indigo-500'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
              </div>
              <div className='relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6'>
                <h2
                  className='text-3xl font-extrabold text-white'
                  id='join-heading'>
                  Meet our Partners
                </h2>
                <p className='text-lg text-white'>
                  <strong>Kimberly Mair</strong>, the owner of Red Desert
                  Insurance Agency LLC and is WGFPS partner for the states of
                  Wyoming, Utah and Montana. She defines the work “professional”
                  and provides superior service, competitive markets with
                  cutting-edge technology. When not with her clients, you can
                  find her in the country, exploring mother nature, implementing
                  wild life management and giving back to the communities she
                  serves.
                </p>
                <p className='text-lg text-white'>
                  If you are a insurance professional and would like to explore
                  joining the Kimberly Mair team, click below.
                </p>
                <Link href='/kim-mair'>
                  <a className='block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto'>
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why WIG */}
      <div className='bg-gray-50'>
        <h2 className='sr-only'>Why us?</h2>
        <div className='max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 mb-6 pl-8'>
              Why us?
            </h2>
          </div>
          <div className='max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {perks.map((perk) => (
              <div key={perk.name} className='sm:flex'>
                <div className='sm:flex-shrink-0'>
                  <div className='flow-root'>
                    <img className='w-24 h-24' src={perk.imageSrc} alt='' />
                  </div>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <h3 className='text-lg md:text-xl font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-2 text-sm md:text-lg text-gray-500'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How WIG Works */}
      <div className='relative bg-gray-50'>
        <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
            alt=''
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 mix-blend-multiply'
          />
        </div>
        <div className='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <p className='mt-2 text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              How It works
            </p>
            <p className='mt-3 text-lg text-gray-700'>
              Here at <strong>WealthGuard Insurance Group</strong>, we take
              pride in providing a faster, better, and easier life insurance
              experience for you and your loved ones.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <Link href='/how-it-works'>
                  <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-blue-50'>
                    Learn more
                    <ExternalLinkIcon
                      className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check My Price Section */}
      <div className='relative my-20'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
          <div className='relative sm:py-16 lg:py-0'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
              <div className='absolute inset-y-0 right-1/2 w-full bg-blue-50 rounded-r-3xl lg:right-72' />
              <svg
                className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'>
                <defs>
                  <pattern
                    id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              {/* Testimonial card*/}
              <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
                <img
                  className='absolute inset-0 h-full w-full object-cover'
                  src='https://images.unsplash.com/photo-1621963836802-73bd4c1815fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
                  alt=''
                />
                <div className='absolute inset-0 bg-blue-500 mix-blend-multiply' />
                <div className='absolute inset-0 bg-gradient-to-t from-pink-600 via-pink-600 opacity-30' />
              </div>
            </div>
          </div>

          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
            {/* Content area */}
            <div className='pt-12 sm:pt-16 lg:pt-32'>
              <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
                Rest easy knowing you&apos;re safe
              </h2>
              <div className='mt-6 text-gray-500 space-y-6'>
                <p className='text-lg'>
                  In little to no time, you could qualify for a policy that
                  could provide assistance for generations and help keep those
                  you love <strong>safe</strong>.
                </p>
              </div>
              <div className='py-8'>
                <div className='inline-flex rounded-md shadow float-right'>
                  <Link href='/estimate'>
                    <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-blue-50'>
                      Learn more
                      <ExternalLinkIcon
                        className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='max-w-2xl lg:mx-auto lg:text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Frequently asked questions
            </h2>
            <p className='mt-4 text-lg md:text-xl text-gray-500'>
              Here are a few of the most frequently asked questions about life
              insurance.
            </p>
          </div>
          <div className='mt-20'>
            <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10'>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className='font-semibold text-lg text-gray-900'>
                    {faq.question}
                  </dt>
                  <dd className='mt-3 text-gray-500'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='bg-blue-50 mb-12 md:mb-16'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl'>
            <span className='block'>Ready to learn more?</span>
            <span className='block text-blue-600'>See our policies.</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <Link href='/insurance/policies'>
                <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
