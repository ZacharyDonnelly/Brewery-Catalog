import { gql } from "@apollo/client"

const DETAIL_QUERY = gql`
	query BreweryDetails($id: String!) {
		Details(id: $id) @rest(type: "Brewery", path: "/breweries/{args.id}") {
			name
			city
			state
			id
			country
			phone
			website_url
		}
	}
`

export default DETAIL_QUERY
