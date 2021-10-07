import {
  QuestionMarkCircleIcon,
  DocumentIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'
import Layout from '../components/Layout'

const supportLinks = [
  {
    name: 'Browse our Policies',
    href: '/insurance/policies',
    description:
      'Your life insurance plan should adapt to your life — not the other way around. Learn more about the different life insurance policies offered by WIG',
    icon: DocumentIcon,
  },
  {
    name: 'Get a Quote',
    href: '/estimate',
    description:
      'Real time quoting data on rates and/or product changes to help you have the latest prices.',
    icon: PencilAltIcon,
  },
  {
    name: 'Get Help',
    href: '/contact-us',
    description:
      "With years of industry experience, providing you with more time and money in your wallet. We're here to help.",
    icon: QuestionMarkCircleIcon,
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

export default function HowItWorks() {
  return (
    <Layout title={`WIG || How It Works`}>
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Our mission is to protect the next million families and we intend
              to do just that with an honest and transparent process. Get a
              better idea of how it works.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading">
          <h2 className="sr-only" id="contact-heading">
            Learn more
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={link.href}
                    className="text-base font-medium text-blue-700 hover:text-blue-600">
                    Learn more<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-lg font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
