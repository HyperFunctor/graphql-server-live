import { loadFiles } from "@graphql-tools/load-files";
import Config from "../.graphqlrc.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Resolvers } from "./generated/graphql.js";

const typeDefs = await loadFiles(Config.schema);

const resolvers = {
	Query: {
		async product(parent, args) {
			// return {
			// 	id: "1",
			// 	name: "Product 1",
			// 	// reviews: [],
			// };
			return null;
		},
		async reviews(parent, args) {
			return [
				{
					id: "1",
					body: "Review 1",
				},
			];
		},
	},
	Product: {
		reviews(parent, args) {},
	},
} satisfies Resolvers;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
