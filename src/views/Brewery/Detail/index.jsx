import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import DETAIL_QUERY from "../../../graphql/Query/Detail"
import styles from "./styles.module.scss"

const BreweryDetail = () => {
	const { id } = useParams()
	const [details, setDetails] = useState({
		name: "",
		city: "",
		state: "",
		country: "",
		phone: "",
		website_url: ""
	})
	const breweryDetails = useQuery(DETAIL_QUERY, {
		variables: { id }
	})

	useEffect(() => {
		if (breweryDetails?.data?.Details && !breweryDetails?.loading) {
			setDetails({
				name: breweryDetails?.data?.Details?.name,
				city: breweryDetails?.data?.Details?.city,
				state: breweryDetails?.data?.Details?.state,
				country: breweryDetails?.data?.Details?.country,
				phone: breweryDetails?.data?.Details?.phone,
				website_url: breweryDetails?.data?.Details?.website_url
			})
		}
	}, [breweryDetails])

	return (
		<div className={styles.container}>
			<p>{details.name}</p>
			<p>{details.city}</p>
			<p>{details.state}</p>
			<p>{details.country}</p>
			<p>{details.phone}</p>
			<p>{details.website_url}</p>
			<Link to='/breweries'>Back to Breweries</Link>
		</div>
	)
}

export default BreweryDetail
