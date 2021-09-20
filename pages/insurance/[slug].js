import { getPoliciesSlugs, getPolicy } from '../../lib/data'
import Layout from '../../components/Layout'

export const getStaticPaths = async () => {
  const slugRes = await getPoliciesSlugs()
  const slugs = slugRes.policies

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const policy = await getPolicy(params.slug)

  return {
    props: {
      policy: policy.policies[0],
    },
  }
}

export default function PolicyPage({ policy }) {
  console.log(policy)
  return (
    <Layout>
      <div className="bg-blue-200 lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{policy.title}</span>
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
            src={policy.image.url}
            alt=""
          />
        </div>
      </div>
      <h1>{policy.title}</h1>
    </Layout>
  )
}
