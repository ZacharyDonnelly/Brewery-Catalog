import { useQuery } from "@apollo/client"
import { useLazyQuery } from "@apollo/react-hooks"
import { useCallback, useEffect, useState } from "react"
import Content from "../../../BaseComponents/Content"

import LIST_QUERY from "../../../utils/hooks/Query/List"
import SEARCH_QUERY from "../../../utils/hooks/Query/Search"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const [breweries, setBreweries] = useState([])
	const [search, setSearch] = useState("")
	const ListData = useQuery(LIST_QUERY)
	const [getResults, { loading, data }] = useLazyQuery(SEARCH_QUERY, {
		variables: { id: search }
	})

	const breweryList = ListData?.data?.Brewery
	const isFetching = ListData?.loading

	const handleSearch = useCallback(() => {
		getResults()
	}, [])

	useEffect(() => {
		if (breweryList && !isFetching && !data) {
			setBreweries(breweryList)
		} else if (data?.Results && !loading) {
			const results = data?.Results
			setBreweries(results)
		}

		return () => {
			setBreweries([])
		}

		console.log(breweries)
	}, [isFetching, breweries, breweryList, data, loading])

	return (
		<Content className={styles.container}>
			<header>
				<h1>Brewery Catalog</h1>
			</header>
			<div className={styles.formWrapper}>
				<form>
					<input
						type='text'
						name='search'
						placeholder='Find a brewery'
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button type='button' onClick={handleSearch}>
						Search
					</button>
					<button type='reset' onClick={() => setSearch("")}>
						Reset
					</button>
				</form>
				{!loading && data?.Results.length > 0 ? (
					<BreweryListCard data={breweries} isFetching={loading} />
				) : (
					<BreweryListCard data={breweries} isFetching={isFetching} />
				)}
			</div>
		</Content>
	)
}

export default BreweryList
