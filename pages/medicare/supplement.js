import Layout from '../../components/Layout'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/solid'

export default function SupplementPage() {
  return (
    <Layout title={'WIG | Medicare Supplement - Medigap'}>
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl lg:text-6xl'>
              <span className='block xl:inline'>Medicare Supplement</span>
            </h1>
            <h1 className='mt-3 text-2xl tracking-tight font-extrabold text-gray-900  md:text-3xl lg:text-4xl'>
              <span className='block xl:inline'>Medigap</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              Medicare supplement insurance, also known as Medigap, is an
              insurance policy meant to pay for the costs of Original Medicare.
            </p>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            alt='Annuities'
          />
        </div>
      </div>

      <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
        <div className='max-w-max lg:max-w-7xl mx-auto'>
          <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
            <div className='text-base max-w-prose lg:max-w-none'>
              <h2 className='leading-6 text-blue-600 font-semibold tracking-wide uppercase'>
                About
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Medicare Supplement
              </p>
            </div>
          </div>
          <div className='relative'>
            <svg
              className='hidden md:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='95e8f2de-6d30-4b7e-8159-f791729db21b'
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
                height={384}
                fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)'
              />
            </svg>
            <svg
              className='hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
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
                height={384}
                fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)'
              />
            </svg>
            <div className='relative md:bg-white md:p-6'>
              <div className='lg:grid lg:grid-cols-1 lg:gap-6'>
                <div className='prose prose-blue prose-lg text-gray-500 lg:max-w-none'>
                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    What is Medicare supplement insurance?
                  </p>
                  <p>
                    It is a supplemental insurance so in order to sign up for
                    Medigap, one must already be enrolled in Original Medicare
                    (Medicare Part A and Part B). The &apos;gaps&apos; that
                    Medigap covers are the costs that Medicare doesn&apos;t
                    cover like copayments, coinsurance, and deductibles. In the
                    Original Medicare page, it was mentioned that there would be
                    out-of-pocket costs for nearly every product or service
                    received. Medigap is insurance to help mitigate those costs
                    through an additional monthly premium.
                  </p>
                  <p>
                    Medigap is provided by a private insurance company but there
                    are 10 standardized plans that are approved by Medicare. The
                    10 plans are named with single letters which may be very
                    confusing for people researching Medicare. There are
                    Medicare Part A, Part B, Part C, and Part D which are under
                    Medicare and the 10 Medigap plans are A, B, C, D, F, G, K,
                    L, M, and N. Plan F being the most popular due to its
                    extensive coverage. The plans are standardized so each plan
                    has a set amount of coverage as mandated by law. Prospective
                    enrollees in Medigap should still do their research because
                    despite the uniform coverage, prices will vary from provider
                    to provider so research should be done for the best rates.
                  </p>
                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    When can I enroll for a Medigap plan?
                  </p>
                  <p>
                    The most ideal time to sign up for Medigap would be during
                    the Medigap Open Enrollment Period. This period lasts 6
                    months and beings on the first day of the month in which
                    you&apos;re both 65 or older and enrolled in Medicare Part
                    B. During this period, the insurance must
                  </p>
                  <ol role='list'>
                    <li>Offer you every Medigap policy it offers</li>

                    <li>
                      Charge you the same rate as a person with no health
                      problems
                    </li>
                    <li>Not delay the start of your coverage</li>
                  </ol>
                  <p>
                    These three clauses are known as &quot;guaranteed
                    issue&quot;. The other instances in with you would be
                    entitled &quot;guaranteed issue&quot; is if
                  </p>
                  <ol role='list'>
                    <li>
                      Your Medicare Advantage plan shuts down or you move out of
                      its service area
                    </li>
                    <li>Your retiree plan shuts down</li>
                    <li>
                      You joined Medicare Advantage at 65 but decide to switch
                      back to original Medicare within a year.
                    </li>
                    <li>Your Medigap plan shuts down.</li>
                  </ol>
                  <p>
                    This means even if you have health problems, signing up
                    during your Medigap Open Enrollment Period will mean the
                    lowest rates. Medigap plans are guaranteed renewable each
                    year even if you develop a health problem, as long as you
                    continue to pay the monthly premium.
                  </p>
                  <p>
                    Outside open enrollment, signing up for Medigap can be
                    costly. Outside open enrollment, insurance companies can
                    charge a higher premium for pre-existing conditions or even
                    refuse to provide service at all.
                  </p>
                </div>
              </div>
              <div className='mt-8 inline-flex rounded-md shadow'>
                <Link href='/contact-us'>
                  <a className='flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className='mt-8 inline-flex rounded-md shadow ml-4'>
                <a
                  href='tel:832-930-3827'
                  target='_blank'
                  rel='noreferrer'
                  className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50'>
                  <PhoneIcon
                    className='-ml-0.5 mr-2 h-4 w-4'
                    aria-hidden='true'
                  />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
