import Layout from '../components/Layout'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import emailjs from 'emailjs-com'

function fun() {
  document.getElementById('from_name').value = ''
  document.getElementById('user_email').value = ''
  document.getElementById('user_phone').value = ''
  document.getElementById('message').value = ''
}

function sendEmail(e) {
  e.preventDefault()
  if (e.target.user_email.value === '' || e.target.from_name.value === '') {
    return alert('Form cannot be empty!')
  } else {
    emailjs
      .sendForm(
        'service_74a7ngi',
        'template_rbn9l2k',
        e.target,
        'user_1ODnWoNdXKoQipSD1qXJf'
      )
      .then(
        (result) => {
          alert('Message sent!')
          console.log(result.text)
        },
        (error) => {
          alert(error.text)
        }
      )
    fun()
  }
}

export default function ContactUsPage() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Contact Us</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
              With years of industry experience, providing you with more time
              and money in your wallet. We&apos;re here to help.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Form */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Providing insurance solutions with expertise, diversity of
                products and underwriting integrity!
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>7205 FM 1488 Rd, Ste-A</p>
                    <p>Magnolia, TX 77354</p>
                  </dd>
                </div>

                <div className="mt-3">
                  <dt className="sr-only">Phone</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <a
                        href="tel:832-930-3827"
                        target="_blank"
                        rel="noreferrer">
                        832-930-3827
                      </a>
                    </span>
                  </dd>
                </div>

                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <a
                        href="mailto:service@wealthguardig.com"
                        target="_blank"
                        rel="noreferrer">
                        service@wealthguardig.com
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>
              {/* <p className="mt-6 text-base text-gray-500">
                Looking for careers?{' '}
                <a href="#" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p> */}
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                id="template_rbn9l2k"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
                onSubmit={sendEmail}>
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="user_phone"
                    name="user_phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
