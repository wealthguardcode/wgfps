import { GraphQLClient, gql } from 'graphql-request'

export const getPolicies = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktp360ow1hmb01z5httxcwxm/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      policies {
        id
        slug
        title
        description
        image {
          url
          height
          width
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPoliciesSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktp360ow1hmb01z5httxcwxm/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      policies {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPolicy = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktp360ow1hmb01z5httxcwxm/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPolicy($slug: String!) {
      policies(where: { slug: $slug }) {
        title
        slug
        description
        image {
          url
          height
          width
        }
        link
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}
