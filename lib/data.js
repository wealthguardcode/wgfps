import { GraphQLClient, gql } from 'graphql-request'

export const getPolicies = async () => {
  const endpoint = process.env.ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: process.env.GRAPH_CMS_PRIVATE_ACCESS_TOKEN,
    },
  })

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
  const endpoint = process.env.ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: process.env.GRAPH_CMS_PRIVATE_ACCESS_TOKEN,
    },
  })

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
  const endpoint = process.env.ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: process.env.GRAPH_CMS_PRIVATE_ACCESS_TOKEN,
    },
  })

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
        subheading
        whatIsIt
        howItWorks
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}
