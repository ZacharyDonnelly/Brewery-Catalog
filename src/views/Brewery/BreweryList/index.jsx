import { useQuery } from "@apollo/client"
import { useLazyQuery } from "@apollo/react-hooks"
import { useCallback, useState } from "react"
import Content from "../../../BaseComponents/Content"

import LIST_QUERY from "../../../graphql/Query/List"
import SEARCH_QUERY from "../../../graphql/Query/Search"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const [search, setSearch] = useState("")
	const ListData = useQuery(LIST_QUERY)
	const [getResults, { loading, data }] = useLazyQuery(SEARCH_QUERY, {
		variables: { id: search }
	})

	const handleSearch = useCallback(() => {
		getResults()
	}, [])

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
					<button type='button' onClick={handleSearch}>
						Search
					</button>
					<button type='reset' onClick={() => setSearch("")}>
						Reset
					</button>
				</form>
				{!loading && data?.Results.length > 0 ? (
					<BreweryListCard data={data?.Results} isFetching={loading} />
				) : (
					<BreweryListCard data={ListData?.data?.Brewery} isFetching={ListData.isFetching} />
				)}
			</div>
		</Content>
	)
}

export default BreweryList
