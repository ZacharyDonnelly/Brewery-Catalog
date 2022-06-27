import { gql } from "@apollo/client"

const SEARCH_QUERY = gql`
	query SearchBreweries($id: String!) {
		Results(id: $id) @rest(type: "Brewery", path: "/breweries/search?query={args.id}") {
			name
			city
			state
			id
		}
	}
`

export default SEARCH_QUERY
