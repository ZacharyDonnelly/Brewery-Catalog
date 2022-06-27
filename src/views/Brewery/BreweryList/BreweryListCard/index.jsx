import { Link } from "react-router-dom"
import { CaretRight } from "../../../../static/design/vars/icons"
import styles from "./styles.module.scss"

const BreweryList = ({ isFetching, data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				{!isFetching &&
					data &&
					data.Brewery.map((b, i) => (
						<div key={i} className={styles.card}>
							<div>
								<h3 className={styles.header}>{b.name}</h3>
								<div className={styles.link}>
									<Link to='/details'>
										<span>
											View Brewery <CaretRight className={styles.caret} />
										</span>
									</Link>
								</div>
							</div>
							<div>
								<h4>Location</h4>
								<p>{`City: ${b.city}`}</p>
								<p>{`State: ${b.state}`}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default BreweryList
