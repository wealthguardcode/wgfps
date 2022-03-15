import Link from 'next/link'
import Layout from '../../components/Layout'
import { PhoneIcon } from '@heroicons/react/solid'

export default function ADPage() {
  return (
    <Layout title={'WIG | Medicare A - D'}>
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Medicare A - D</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              Assistance with the things you cannot always plan on. From
              inpatient or outpatient hospital stays to medical supplies and
              prescription drugs.
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
                Medicare A - D
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
                    Part A
                  </p>
                  <p>
                    Hospital Insurance helps cover inpatient care in hospitals,
                    skilled nursing facility (SNF) care, hospice care, and home
                    health care. A general rule of thumb for Part A coverage is
                    called the &quot;Two-Midnight rule&quot;. If a doctor admits
                    a Medicare enrollee as an inpatient with the expectation
                    that the patient will require hospital care across two
                    midnights, Medicare Part A will be appropriate for coverage.
                    Medicare Part A will cover hospital inpatient stays
                    (consecutive or intermittent) up to 90 days. The first 60
                    days would all be covered in full by Medicare after
                    deductible is met for the benefit period, days 61-90 will
                    require a daily coinsurance. In most cases, enrollees are
                    automatically enrolled in premium-free Part A if they have
                    worked and paid Social Security taxes for at least 40
                    calendar quarters (10 years).
                  </p>
                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    Part B
                  </p>
                  <p>
                    Medical Insurance to cover products and services that are
                    not covered by Part A, generally on an outpatient basis. The
                    two types of services that Part B covers are medically
                    necessary services and preventive services. Medically
                    necessary services are those that are required to diagnose
                    or treat a medical condition. Preventive services are
                    services that can prevent illness or discover it at an early
                    stage, when treatment would be most effective. These two
                    covered types of services are extensive and include many
                    outpatient services. After the deductible is met, Part B
                    will pay for 80% of the Medicare-approved services and the
                    patient typically pays the remaining 20%. Part B, unlike
                    Part A, requires a monthly premium. Part A and Part B make
                    up what is called Original Medicare.
                  </p>
                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    Part C
                  </p>
                  <p>Medicare Advantage plans</p>
                  <p>
                    See the Medicare Advantage plans page{' '}
                    <Link href='/medicare/advantage'>
                      <a>here</a>
                    </Link>
                    .
                  </p>

                  <p className='mt-0 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    Part D
                  </p>
                  <p>
                    Medicare Prescription Drug plans subsidizes the cost of
                    prescription drugs for Medicare beneficiaries. To qualify
                    for a Medicare Part D Prescription Drug plan, prospective
                    beneficiaries must already be signed up for benefits under
                    Medicare Part A and/or Part B. Medicare Part D Prescription
                    Drug plans are offered by Medicare-approved private
                    insurance companies. The monthly premium of each Medicare
                    Part D Prescription Drug plan may differ. Medicare
                    Prescription Drug plans have a formulary which is a list of
                    covered drugs. The formulary may change at any time.
                    Individuals will receive notice from their plan when
                    necessary.
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
