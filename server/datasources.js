import { RESTDataSource } from "apollo-datasource-rest"

class BreweryCatalog extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "https://api.openbrewerydb.org/"
	}

	async getBreweries() {
		try {
			const data = await this.get("breweries", null, {
				cacheOptions: { ttl: 60 }
			})
			return data
		} catch (error) {
			console.error("error", error)
		}
	}

	async searchBreweries(id) {
		try {
			const data = await this.get(`breweries/search?query=${id}`, null, {
				cacheOptions: { ttl: 60 }
			})
			return data
		} catch (error) {
			console.error("error", error)
		}
	}

	async getBreweryDetails(id) {
		try {
			const data = await this.get(`breweries/${id}`, null, {
				cacheOptions: { ttl: 60 }
			})
			return data
		} catch (error) {
			console.error("error", error)
		}
	}
}

export default BreweryCatalog
