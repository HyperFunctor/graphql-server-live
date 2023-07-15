import type { CodegenConfig } from "@graphql-codegen/cli";

const config = {
	overwrite: true,
	schema: "./src/schema/**/schema.graphql",
	generates: {
		"src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
		},
	},
} satisfies CodegenConfig;

export default config;
