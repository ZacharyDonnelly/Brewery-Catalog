import { useQuery } from "@apollo/client"
import Content from "../../../BaseComponents/Content"

import LoadingSpinner from "../../../Components/LoadingSpinner"
import LIST_QUERY from "../../../graphql/Query/List"
import SEARCH_QUERY from "../../../graphql/Query/Search"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const { data, isFetching, error } = useQuery(LIST_QUERY)
	const { sData, loading, e, fetchMore } = useQuery(SEARCH_QUERY, {
		variables: { id: "ba" }
	})

	if (isFetching) return <LoadingSpinner />
	if (error) return <pre> {error.message} </pre>
	console.log(data, fetchMore, sData)

	return (
		<Content className={styles.container}>
			<header>
				<h1> Brewery Catalog </h1>
			</header>
			<div className={styles.formWrapper}>
				<form>
					<input type='text' name='search' placeholder='Find a brewery' />
					<button type='button' onClick={() => fetchMore}>
						Search
					</button>
					<button type='reset'>Reset</button>
				</form>
				<BreweryListCard data={data} isFetching={isFetching} />
			</div>
		</Content>
	)
}

export default BreweryList
