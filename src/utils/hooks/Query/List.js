import { gql } from "@apollo/client"

const endpoint = "breweries?per_page=10"

const LIST_QUERY = gql`
	query Breweries {
		Brewery @rest(type: "Brewery", path: "${endpoint}") {
			name
			city
			state
			id
		}
	}
`

export default LIST_QUERY
