import { useQuery } from "@apollo/client"
import { useCallback, useState } from "react"
import Content from "../../../BaseComponents/Content"

import LIST_QUERY from "../../../graphql/Query/List"
import SEARCH_QUERY from "../../../graphql/Query/Search"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const [search, setSearch] = useState("")
	const ListData = useQuery(LIST_QUERY)
	const SearchQuery = useQuery(SEARCH_QUERY, {
		variables: { id: search }
	})

	console.log(ListData, SearchQuery)

	const handleSearchInput = useCallback((e) => {
		setSearch(e.target.value)
	}, [])

	return (
		<Content className={styles.container}>
			<header>
				<h1> Brewery Catalog </h1>
			</header>
			<div className={styles.formWrapper}>
				<form>
					<input
						type='text'
						name='search'
						placeholder='Find a brewery'
						onChange={(e) => handleSearchInput(e)}
					/>
					<button type='button'>Search</button>
					<button type='reset' onClick={() => setSearch("")}>
						Reset
					</button>
				</form>
				{SearchQuery.data && SearchQuery.data.Results.length > 0 ? (
					<BreweryListCard data={SearchQuery.data.Results} isFetching={SearchQuery.isFetching} />
				) : (
					<BreweryListCard data={ListData?.data?.Brewery} isFetching={ListData.isFetching} />
				)}
			</div>
		</Content>
	)
}

export default BreweryList
