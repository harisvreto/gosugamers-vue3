import gql from 'graphql-tag';

const GET_USERS_QUERY = gql`
query getUsers($queryString: String!) {
    search(query: $queryString, type: USER, first: 100) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
            location
            email
            company
            avatarUrl
          }
        }
      }
    }
}
`;

export {
    GET_USERS_QUERY
}