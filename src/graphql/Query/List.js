import { gql } from '@apollo/client'

export const endpoint = 'breweries?per_page=10'

const LIST_QUERY = gql`
  query Breweries {
    Brewery @rest(type: "Brewery", path: "/breweries?per_page=10") {
      name
      city
      state
    }
  }
`

export default LIST_QUERY
