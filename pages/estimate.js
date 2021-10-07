import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

const EstimateWidget = dynamic(() => import('../components/EstimateWidget'), {
  fallback: <div>Loading...</div>,
})

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

export default function EstimatePage() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Coverage Estimate</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
              Real time quoting data on rates and/or product changes to help you
              have the latest prices.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluc3VyYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>

      {/* Form */}
      <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
            alt="Workflow"
          /> */}
          <img
            className="mx-auto h-20 w-auto"
            src="/images/wig-logo-nobg.svg"
            alt="WealthGuard Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Get your estimate
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-blue-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Ninja Quoter Form */}
            <div className="h-auto w-full mt-8 mb-12 md:mt-5 md:mb-8">
              <EstimateWidget />
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"></div>
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
    </Layout>
  )
}
