import Layout from '../../components/Layout'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/outline'

export default function AnnuitiesPage() {
  return (
    <Layout>
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Annuities</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="Annuities"
          />
        </div>
      </div>

      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                About
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Annuities
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true">
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true">
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="text-base max-w-prose lg:max-w-none">
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Index annuities
                  </p>
                </div>
                <div className="prose prose-blue prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Enjoy the protection of a fixed annuity, the potential for
                    tax-deferred interest earnings based on the performance of a
                    specific index, and the opportunity for guaranteed income
                    for life.
                  </p>
                  <p>
                    Benefit from a powerful combination of growth potential,
                    principal protection and guaranteed lifetime income. By
                    blending market upside with downside protection, index
                    annuities can help provide the income you need to stay on
                    track with your retirement goals.
                  </p>
                  <ol role="list">
                    <li>Help grow your income to the max.</li>
                    <li>Tap into more frowth potential.</li>
                    <li>Help secure income raises for retirement.</li>
                  </ol>
                </div>
                <div className="prose prose-blue prose-lg text-gray-500 lg:max-w-none">
                  <div className="text-base max-w-prose lg:max-w-none">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Fixed annuities
                    </p>
                  </div>
                  <p>
                    It&apos;s not if, but when you need income - That&apos;s
                    where a fixed annuity with a guaranteed interest rate and
                    multiple payout options can help meet specific financial
                    needs and goals. Whether you&apos;re nearing retirement or
                    in retirement, a fixed income as part of your overall
                    strategy can offer safety and stability.
                  </p>
                  <ol role="list">
                    <li>Income you can count on-- for life.</li>
                    <li>Tailor the future you.</li>
                    <li>Flexibility for when you need it most.</li>
                  </ol>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <Link href="/contact-us">
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow ml-4">
                <a
                  href="tel:832-930-3827"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                  <PhoneIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
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
