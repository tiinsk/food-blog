import { GraphQLClient } from 'graphql-request';

import { contentfulUrl } from '../contentful/api';

const graphQLClient = new GraphQLClient(contentfulUrl, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const fetcher = (query, variables) => {
  return graphQLClient.request(query, variables);
};
