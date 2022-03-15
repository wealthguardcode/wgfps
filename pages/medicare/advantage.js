import Layout from '../../components/Layout'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/solid'

export default function AdvantagePage() {
  return (
    <Layout title={'WIG | Medicare C - Advantage'}>
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Medicare Part C</span>
            </h1>
            <h1 className='text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>
              <span className='block xl:inline'>Advantage</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              Medicare Advantage is Part C of Medicare and it is provided by
              private insurance companies that contract with Medicare.
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
                Medicare Part C Advantage
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
                  <p>
                    While Medicare Supplement Insurance (Medigap) is a
                    supplement to Original Medicare, Medicare Advantage is an
                    alternative way for people to get Medicare benefits.
                    Medicare Advantage plans must provide at least what Original
                    Medicare would provide in terms of benefits. Generally Part
                    C: Medicare Advantage Plans may include additional benefits
                    such as prescription drugs, routine dental and vision care,
                    hearing and can even reduce the out-of-pocket costs
                    associated with Original Medicare.
                  </p>
                  <p>
                    Medicare Advantage Plans will usually have a monthly premium
                    in addition to your Part B premium. Medicare Advantage plans
                    may have many bells and whistles and the trade-off for all
                    these benefits could be the area of service a Medicare
                    Advantage Plan covers. Original Medicare is accepted by any
                    doctor that accepts Medicare assignment (nationwide) but
                    Medicare Advantage is limited to a provider network.
                    Medicare Advantage plans are usually HMOs or PPOs though
                    there are PFFS and SNPs.
                  </p>
                  <ol role='list'>
                    <li>
                      Health Maintenance Organizations (HMO) are health
                      insurance plans that require a primary care physician and
                      they act as the hub that links you to other doctors within
                      the provider network.
                    </li>
                    <li>
                      Preferred Provider Organizations (PPO) are more flexible
                      than HMOs and allow you to see doctors as you please but
                      doctors within the provider network will be significantly
                      cheaper.
                    </li>
                    <li>
                      Private Fee-for-Service (PFFS) plans are provided by
                      private insurance companies. PFFS plans are not the same
                      as Original Medicare. The plan will determine how much it
                      will pay and how much you must pay for care and services.
                      Some PFFS will have a network providers.
                    </li>
                    <li>
                      Special Needs Plans (SNPs) are provided by private
                      insurance companies but SNPs limit memberships to those
                      with specific diseases or characteristics so plans can be
                      specifically tailored a more focused group of individuals.
                    </li>
                  </ol>
                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
                    When can I enroll in a Medicare Advantage plan?
                  </p>
                  <p>Medicare Advantage has 3 times to sign up.</p>
                  <ol role='list'>
                    <li>
                      Initial Election Period when you first become eligible for
                      Medicare or when you turn 65. This is a 7-month period
                      which includes the 3 months before the month you turn 65,
                      the month you turn 65, and the 3 months following the
                      month you turn 65.
                    </li>
                    <li>
                      Medicare Annual Election Period which is from October 15-
                      December 7 every year.
                    </li>
                    <li>
                      Special Election Periods are when certain events cause you
                      to lose coverage or gain additional benefits like moving
                      or becoming eligible for Medicaid.
                    </li>
                  </ol>

                  <p className='text-sm text-gray-400'>
                    *Out-of-network/non-contracted providers are under no
                    obligation to treat Preferred Provider Organization (PPO)
                    plan members, except in emergency situations. For a decision
                    about whether they will cover an out-of-network service,
                    they encourage you or your provider to ask us for a
                    pre-service organization determination before you receive
                    the service. Please call their customer service number or
                    see your Evidence of Coverage for more information,
                    including the cost-sharing that applies to out-of-network
                    services
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
