import type { CodegenConfig } from "@graphql-codegen/cli";

const config = {
	overwrite: true,
	schema: "./src/schema/**/schema.graphql",
	generates: {
		"src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				defaultMapper: "../types.js#Mapper<{T}>",
				scalars: {
					DateTime: "Date",
				},
			},
		},
	},
} satisfies CodegenConfig;

export default config;
