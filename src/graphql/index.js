import { ApolloClient, InMemoryCache } from '@apollo/client'

const Client = new ApolloClient({
  uri: 'localhost:3000',
  cache: new InMemoryCache()
})

export default Client
