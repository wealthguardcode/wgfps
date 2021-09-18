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
      }
    }
  `

  return await graphQLClient.request(query)
}
