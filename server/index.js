import { ApolloServer } from "apollo-server-express"
import chalk from "chalk"
import cors from "cors"
import express from "express"
import http from "http"

import { gql } from "apollo-server"
import BreweryCatalog from "./datasources.js"

const typeDefs = gql`
	"A simple type for getting started!"
	type Query {
		Breweries: [Brewery]!
		SearchBreweries(id: String!): Brewery!
	}

	"Brewery Information"
	type Brewery {
		name: String!
		city: String!
		state: String!
		id: String!
	}
`

const resolvers = {
	Query: {
		Breweries: (_, __, { dataSources }) => dataSources.BreweryCatalog.getBreweries(),
		SearchBreweries: (_, { id }, { dataSources }) => dataSources.BreweryCatalog.searchBreweries(id)
	}
}

const log = console.log

async function startApolloServer() {
	const app = express()

	const httpServer = http.createServer(app)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		cache: "bounded",
		dataSources: () => {
			return {
				breweryCatalog: new BreweryCatalog()
			}
		}
	})

	await server.start()

	app.use(
		"*",
		cors({
			origin: "*"
		})
	)

	server.applyMiddleware({ app })

	await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

	Array.from([
		log(chalk.bold.black.bgCyanBright(`Apollo Server ready at http://localhost:4000`)),
		log(chalk.bold.black.bgMagentaBright(`Graphql Server ready at http://localhost:4000/graphql`)),
		log(chalk.bold.black.bgGreenBright(`Client is ready at http://localhost:3000`)),
		log(""),
		log(chalk.bold.bgGray("Enjoy perusing our beer catalog!"))
	]).join("")
}

startApolloServer()
