import { useQuery } from "@apollo/client"
import { useLazyQuery } from "@apollo/react-hooks"
import { useCallback, useEffect, useState } from "react"
import Content from "../../../BaseComponents/Content"
import { CaretDown, CaretUp } from "../../../static/icons"
import Filter from "../../../static/icons/Filter"

import LIST_QUERY from "../../../utils/hooks/Query/List"
import SEARCH_QUERY from "../../../utils/hooks/Query/Search"

import BreweryListCard from "./BreweryListCard"
import styles from "./styles.module.scss"

const BreweryList = () => {
	const [breweries, setBreweries] = useState([])
	const [isSorting, setIsSorting] = useState({
		direction: "",
		inUse: false
	})
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

	const handleSort = useCallback(
		(dir) => {
			setIsSorting({
				direction: dir,
				inUse: true
			})
			setBreweries(
				Array.from(breweryList).sort((a, b) => {
					if (dir === "asc") {
						return a.name.localeCompare(b.name)
					} else {
						return b.name.localeCompare(a.name)
					}
				})
			)
		},
		[breweryList]
	)

	useEffect(() => {
		if (!isSorting.inUse) {
			if (breweryList && !isFetching && !data) {
				setBreweries(breweryList)
			} else if (data?.Results && !loading) {
				const results = data?.Results
				setBreweries(results)
			}
		}
	}, [isFetching, breweries, breweryList, data, loading, isSorting])

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
					<button type='button' onClick={() => handleSearch("asc")}>
						Search
					</button>
					<button type='reset' onClick={() => setSearch("")}>
						Reset
					</button>
				</form>
				<div className={styles.filters}>
					<Filter />
					{!isSorting ? (
						<button type='button' onClick={() => handleSort("asc")}>
							Filter by Name <CaretUp />
						</button>
					) : (
						<button type='button' onClick={() => handleSort("desc")}>
							Filter by Name <CaretDown />
						</button>
					)}
				</div>
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
