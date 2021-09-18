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
      <h1>Hello World</h1>
    </Layout>
  )
}
