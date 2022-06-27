import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import DETAIL_QUERY from "../../../graphql/Query/Detail"
import { CaretLeft } from "../../../static/design/vars/icons"
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
	const { data, loading, error } = useQuery(DETAIL_QUERY, {
		variables: { id }
	})

	useEffect(() => {
		if (data?.Details && !loading) {
			setDetails({
				name: data?.Details?.name,
				city: data?.Details?.city,
				state: data?.Details?.state,
				country: data?.Details?.country,
				phone: data?.Details?.phone,
				website_url: data?.Details?.website_url
			})
		}
	}, [data, loading])

	return (
		<div className={styles.container}>
			<div className={styles.detailView}>
				<header>
					<h2>{details.name}</h2>
				</header>
				<p>City: {details.city}</p>
				<p>State: {details.state}</p>
				<p>Country: {details.country}</p>
				<p>Telephone: {details.phone}</p>
				<p>{details.website_url && `Website: ${details.website_url}`}</p>
			</div>
			<button type='button'>
				<Link to='/breweries'>
					<CaretLeft />
					Back to Breweries
				</Link>
			</button>
		</div>
	)
}

export default BreweryDetail
