import Layout from '../../components/Layout'
import Link from 'next/link'

export default function EmployeeBenefitsPage() {
  return (
    <Layout>
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Employee Benefits</span>
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
            src="https://img1.wsimg.com/isteam/stock/9725/:/cr=t:0%25,l:16.01%25,w:67.98%25,h:100%25/rs=w:400,cg:true"
            alt="Employee Benefits"
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
                Employee Benefits
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
                <div className="prose prose-blue prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    For any business, big or small, benefits serve as a crucial
                    part of employees’ remuneration package. In fact, employees
                    look forward to health care benefits the most, coupled with
                    holidays and monetary perks. Therefore, it makes sense for
                    business owners to give serious thought to offering health
                    benefits. Not only does this work in the employees’ favor,
                    but it also helps employers attract and retain
                    high-performing staff and avoid exorbitant expenses in the
                    long run.
                  </p>
                  <p>
                    One of the main reasons employers willingly provide health
                    care benefits is to take advantage of economical health
                    insurance plans, which in turn, provide them with tax
                    breaks.
                  </p>
                  <p>
                    With that being said, offering benefits cost money, time and
                    can be an administrative burden.
                  </p>
                  <ol role="list">
                    <p>
                      <strong>
                        Guardify Partners with our Client in Communicating Value
                      </strong>
                      <br />
                      Our main strategic priorities for employee benefits are:
                    </p>
                    <li>Controlling health care costs</li>
                    <li>
                      Ensuring employees understand the value of their benefits
                      package
                    </li>
                    <li>Retaining employees (18 percent).</li>
                    <li>Increasing employee engagement (9 percent).</li>
                    <li>Recruiting new employees (8 percent).</li>
                  </ol>
                  <p>
                    Employers have shown some success with controlling the
                    rising cost of health care—primarily by offering
                    consumer-directed health plans such as high-deductible
                    health plans with health savings accounts or health
                    reimbursement arrangements (56 percent of respondents), and
                    creating an organizational culture that promotes health and
                    wellness.
                  </p>
                </div>
                {/* <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <p>
                    Eu leo risus porta integer suspendisse sed sit ligula elit.
                    Elit egestas lacinia sagittis pellentesque neque dignissim
                    vulputate sodales. Diam sed mauris felis risus, ultricies
                    mauris netus tincidunt. Mauris sit eu ac tellus nibh non
                    eget sed accumsan. Viverra ac sed venenatis pulvinar elit.
                    Cras diam quis tincidunt lectus. Non mi vitae, scelerisque
                    felis nisi, netus amet nisl.
                  </p>
                  <p>
                    Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                    elementum consectetur morbi eros, posuere ipsum tortor. Eget
                    cursus massa sed velit feugiat sed ut. Faucibus eros mauris
                    morbi aliquam nullam. Scelerisque elementum sit magna
                    ullamcorper dignissim pretium.
                  </p>
                </div> */}
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <Link href="/contact-us">
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow ml-4">
                <Link href="/estimate">
                  <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                    Check Price
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
