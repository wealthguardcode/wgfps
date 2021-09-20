import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Layout from '../components/Layout'
import Link from 'next/link'
import Script from 'next/script'

const gender = [
  {
    name: 'Male',
  },
  {
    name: 'Female',
  },
]

const health = [
  {
    name: 'Average',
  },
  {
    name: 'Great',
  },
  {
    name: 'Excellent',
  },
]

const perks = [
  {
    name: 'Unlimited free delivery, all year round',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
  },
  {
    name: '10-year warranty',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
    description:
      'We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer you can be sure we’ll ',
  },
  {
    name: 'Exchanges',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.',
  },
  {
    name: 'Lorem ipsum, lorem anuit.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
  },
]

const faqs = [
  {
    id: 1,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "What's the best thing about the US?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  const [selectedSex, setSelectedSex] = useState(gender[0])
  const [selectedHealth, setSelectedHealth] = useState(health[0])

  return (
    <Layout>
      {/* Hero Section */}
      <div className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Life insurance</span>{' '}
              <span className="block text-indigo-600 xl:inline">
                made easy.
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Check my price
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Start applying
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="h-3/4 bg-white mx-10 my-24">
        <div className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 p-10">
          <div className="col-span-1 flex-1 flex flex-col mt-2 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto  w-full max-w-sm lg:w-96">
              <h2 className="lg:text-4xl text-3xl font-extrabold text-gray-900">
                Get your estimate in seconds.
              </h2>
            </div>
          </div>

          <div className="h-auto mt-5">
            {/* <Script
              src="//wq.ninjaquoter.com/Ghwisqf9yUYsqKxM7A2dBmYh.js"
              async
              className="nqwq Ghwi"
              type="text/javascript"
            /> */}
            <script
              className="nqwq Ghwi"
              type="text/javascript"
              src="//wq.ninjaquoter.com/Ghwisqf9yUYsqKxM7A2dBmYh.js"
              async></script>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by many local, small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why WIG */}
      <div className="bg-gray-50">
        <h2 className="sr-only">Why WIG?</h2>
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6 pl-8">
              Why WIG?
            </h2>
          </div>
          <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="w-28 h-24" src={perk.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How WIG Works */}
      <div className="relative bg-gray-50">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
              How WIG works
            </p>
            <p className="mt-3 text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="/how-it-works">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Learn more
                    <ExternalLinkIcon
                      className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check My Price Section */}
      <div className="relative my-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392">
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1621963836802-73bd4c1815fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  alt=""
                />
                <div className="absolute inset-0 bg-red-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Rest easy knowing you&apos;re safe
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
              </div>
              <div className="py-8">
                <div className="inline-flex rounded-md shadow float-right">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 ">
                    Check my price
                    <ExternalLinkIcon
                      className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
              elementum blandit et.
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-50 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Get started today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
