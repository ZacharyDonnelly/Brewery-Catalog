import { Link, useParams } from "react-router-dom"

import styles from "./styles.module.scss"

const BreweryDetail = () => {
	const { id } = useParams()

	return (
		<div className={styles.container}>
			<h1>Brewery {id}</h1>
			<p>Brewtown, Oregon 12345</p>
			<p>United States</p>
			<p>8005551234</p>
			<p>
				<a href='https://example.com'>View Website</a>
			</p>
			<Link to='/breweries'>Back to Breweries</Link>
		</div>
	)
}

export default BreweryDetail
