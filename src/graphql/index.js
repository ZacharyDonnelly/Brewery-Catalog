import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'

import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://api.openbrewerydb.org/'
})

const link = new HttpLink({
  uri: 'http://localhost:4000/'
})

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, link])
})

export default Client
