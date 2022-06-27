import { useQuery } from "@apollo/client"

import Layout from "../../../BaseComponents/Layout"
import LoadingSpinner from "../../../Components/LoadingSpinner"
import LIST_QUERY from "../../../graphql/Query/List"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const { data, isFetching, error } = useQuery(LIST_QUERY)

	if (isFetching) return <LoadingSpinner />
	if (error) return <pre> {error.message} </pre>
	console.log(data)

	return (
		<Layout className={styles.container}>
			<header>
				<h1> Brewery Catalog </h1>
			</header>
			<div className={styles.formWrapper}>
				<form>
					<input type='text' name='search' placeholder='Find a brewery' />
					<button type='button'>Search</button>
					<button type='reset'>Reset</button>
				</form>
				{/* <div className={styles.list}> */}
				<BreweryListCard data={data} isFetching={isFetching} />
				{/* </div> */}
			</div>
		</Layout>
	)
}

export default BreweryList
