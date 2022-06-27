import cn from "classnames"

import styles from "./styles.module.scss"

const BreweryList = ({ isFetching, data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cardWrapper}>
				<div className={styles.cardContainer}>
					{!isFetching &&
						data &&
						data.Brewery.map((b, i) => (
							<div
								key={i}
								className={cn(styles.card, {
									[styles.cardLg]: i === 0 || i === 4
								})}
							>
								<div className={styles.content}>
									<h3 className={styles.header}>{b.name}</h3>
									<div className={styles.info}>
										<p>{b.city}</p>
										<p>{b.state}</p>
									</div>
									<button>Read now</button>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default BreweryList
