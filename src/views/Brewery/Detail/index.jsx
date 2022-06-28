import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CaretLeft } from "../../../static/design/icons"
import FormatPhoneNumber from "../../../utils/helpers/formatPhoneNumber"
import DETAIL_QUERY from "../../../utils/hooks/Query/Detail"
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
	const { data, loading } = useQuery(DETAIL_QUERY, {
		variables: { id }
	})

	useEffect(() => {
		if (data?.Details && !loading) {
			setDetails({
				name: data?.Details?.name,
				city: data?.Details?.city,
				state: data?.Details?.state,
				country: data?.Details?.country,
				phone: FormatPhoneNumber(data?.Details?.phone),
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
				{details.phone && <p>Telephone: ${details.phone}</p>}
				<p>
					{details.website_url && (
						<>
							Website: <a href={details.website_url}>{details.website_url}</a>
						</>
					)}
				</p>
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
