import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config = {
	overwrite: true,
	schema: "./src/schema/**/*.graphql",
	generates: {
		"src/graphql/": defineConfig({
			typesPluginsConfig: {
				optionalInfoArgument: true,
				defaultMapper: "../types.js#Mapper<{T}>",
				contextType: "../types.js#Context",
			},
			scalarsOverrides: {
				ID: {
					type: "string",
				},
				DateTime: {
					type: "Date",
				},
			},
		}),
	},
	hooks: {
		afterAllFileWrite: ["pnpm prettier --write"],
	},
} satisfies CodegenConfig;

export default config;
