import Layout from '../../components/Layout'
import { getPolicies } from '../../lib/data'

export const getStaticProps = async () => {
  const data = await getPolicies()
  return {
    props: {
      data,
    },
  }
}

export default function Policies({ data }) {
  console.log(data)
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
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
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

      {/* Policies GRID */}
      <div className="mx-20 my-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.policies.map((policy) => (
            <div
              key={policy.id}
              className="p-3 border rounded-xl hover:bg-blue-200 hover:border-blue-300 hover:border-8">
              <h1 className="my-2 text-3xl semibold">{policy.title}</h1>

              <p className="line-clamp-3 my-3">
                {policy.description.replace(/<[^>]+>/g, ' ')}
              </p>
              <button className="p-2 bg-black text-white rounded hover:bg-gray-700 hover:cursor-pointer">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
    </Layout>
  )
}