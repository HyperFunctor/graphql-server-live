import { Resolvers } from "./generated/graphql.js";
import { loadFiles } from "@graphql-tools/load-files";
import Config from "../.graphqlrc.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = await loadFiles(Config.schema);

const resolvers = {
	Query: {
		user: (_parent, args) => {
			return {
				id: args.id,
				fullName: "John Doe",
				isAdmin: false,
			};
		},
	},
} satisfies Resolvers;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
