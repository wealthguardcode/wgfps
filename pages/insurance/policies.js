import Layout from '../../components/Layout'
import { getPolicies } from '../../lib/data'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/outline'

export const getStaticProps = async () => {
  const data = await getPolicies()
  return {
    props: {
      data,
    },
  }
}

const features = [
  {
    name: 'Local team members',
    description:
      'We may be strong as individuals but together we are invincible. Local and here to help.',
  },
  {
    name: 'Instant quote',
    description:
      'Real time quoting data on rates and/or product changes to help you have the latest prices.',
  },
  {
    name: 'Worry-free',
    description:
      'No worries, we’ve got you covered. Helping you attain your peace of mind.',
  },
  {
    name: 'Expert coverage',
    description:
      'With years of industry experience, providing you with more time and money in your wallet.',
  },
]

export default function Policies({ data }) {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Our Policies</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
              As you begin to set up your new household and family, there are
              many things to consider. Not only will you have to discuss how to
              handle such things as holidays and household duties, but you will
              also want to establish a financial plan to reach your long term
              goals. We&apos;re here to help.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Policies List */}
      <div className="mx-2 md:mx-20 my-16 md:mt-24 md:mb-16">
        <div className="grid grid-cols-1 gap-6 ">
          {data.policies.map((policy) => (
            <div
              key={policy.id}
              className="p-6 md:p-12 border rounded-xl hover:shadow-xl hover:border-gray-400 hover:border-8">
              <Link href={policy.slug} passHref>
                <h1 className="my-2 text-3xl font-extrabold hover:cursor-pointer">
                  {policy.title}
                </h1>
              </Link>

              <p className="text-lg text-gray-600 my-3">
                {policy.description.replace(/<[^>]+>/g, ' ')}
              </p>
              <Link href={policy.slug} passHref>
                <button className="p-2 bg-gray-900 text-white rounded hover:bg-gray-800 hover:cursor-pointer">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Life insurance features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Life is uncertain. People are not. Here&apos;s some of our
              features.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  )
}
