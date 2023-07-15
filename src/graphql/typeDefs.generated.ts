import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 12, end: 17 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 22, end: 29 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 30, end: 32 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 34, end: 36 },
									},
									loc: { start: 34, end: 36 },
								},
								loc: { start: 34, end: 37 },
							},
							directives: [],
							loc: { start: 30, end: 37 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 40, end: 47 },
						},
						loc: { start: 40, end: 47 },
					},
					directives: [],
					loc: { start: 22, end: 47 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 50, end: 58 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 59, end: 64 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 66, end: 69 },
									},
									loc: { start: 66, end: 69 },
								},
								loc: { start: 66, end: 70 },
							},
							directives: [],
							loc: { start: 59, end: 70 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 72, end: 76 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 78, end: 81 },
								},
								loc: { start: 78, end: 81 },
							},
							directives: [],
							loc: { start: 72, end: 81 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 85, end: 92 },
									},
									loc: { start: 85, end: 92 },
								},
								loc: { start: 85, end: 93 },
							},
							loc: { start: 84, end: 94 },
						},
						loc: { start: 84, end: 95 },
					},
					directives: [],
					loc: { start: 50, end: 95 },
				},
			],
			loc: { start: 0, end: 97 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Image",
				loc: { start: 104, end: 109 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "url",
						loc: { start: 114, end: 117 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 119, end: 125 },
							},
							loc: { start: 119, end: 125 },
						},
						loc: { start: 119, end: 126 },
					},
					directives: [],
					loc: { start: 114, end: 126 },
				},
			],
			loc: { start: 99, end: 128 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Product",
				loc: { start: 135, end: 142 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 147, end: 149 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 151, end: 153 },
							},
							loc: { start: 151, end: 153 },
						},
						loc: { start: 151, end: 154 },
					},
					directives: [],
					loc: { start: 147, end: 154 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 157, end: 161 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 163, end: 169 },
							},
							loc: { start: 163, end: 169 },
						},
						loc: { start: 163, end: 170 },
					},
					directives: [],
					loc: { start: 157, end: 170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 173, end: 177 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 179, end: 185 },
							},
							loc: { start: 179, end: 185 },
						},
						loc: { start: 179, end: 186 },
					},
					directives: [],
					loc: { start: 173, end: 186 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 189, end: 200 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 202, end: 208 },
							},
							loc: { start: 202, end: 208 },
						},
						loc: { start: 202, end: 209 },
					},
					directives: [],
					loc: { start: 189, end: 209 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 212, end: 217 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 219, end: 222 },
							},
							loc: { start: 219, end: 222 },
						},
						loc: { start: 219, end: 223 },
					},
					directives: [],
					loc: { start: 212, end: 223 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 226, end: 232 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Image",
										loc: { start: 235, end: 240 },
									},
									loc: { start: 235, end: 240 },
								},
								loc: { start: 235, end: 241 },
							},
							loc: { start: 234, end: 242 },
						},
						loc: { start: 234, end: 243 },
					},
					directives: [],
					loc: { start: 226, end: 243 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 246, end: 253 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Review",
										loc: { start: 256, end: 262 },
									},
									loc: { start: 256, end: 262 },
								},
								loc: { start: 256, end: 263 },
							},
							loc: { start: 255, end: 264 },
						},
						loc: { start: 255, end: 265 },
					},
					directives: [],
					loc: { start: 246, end: 265 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 268, end: 277 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 279, end: 287 },
							},
							loc: { start: 279, end: 287 },
						},
						loc: { start: 279, end: 288 },
					},
					directives: [],
					loc: { start: 268, end: 288 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 291, end: 300 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 302, end: 310 },
							},
							loc: { start: 302, end: 310 },
						},
						loc: { start: 302, end: 311 },
					},
					directives: [],
					loc: { start: 291, end: 311 },
				},
			],
			loc: { start: 130, end: 313 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Review",
				loc: { start: 319, end: 325 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 330, end: 332 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 334, end: 336 },
							},
							loc: { start: 334, end: 336 },
						},
						loc: { start: 334, end: 337 },
					},
					directives: [],
					loc: { start: 330, end: 337 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 340, end: 345 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 347, end: 353 },
							},
							loc: { start: 347, end: 353 },
						},
						loc: { start: 347, end: 354 },
					},
					directives: [],
					loc: { start: 340, end: 354 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 357, end: 368 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 370, end: 376 },
							},
							loc: { start: 370, end: 376 },
						},
						loc: { start: 370, end: 377 },
					},
					directives: [],
					loc: { start: 357, end: 377 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 380, end: 386 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 388, end: 391 },
							},
							loc: { start: 388, end: 391 },
						},
						loc: { start: 388, end: 392 },
					},
					directives: [],
					loc: { start: 380, end: 392 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 395, end: 404 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 406, end: 414 },
							},
							loc: { start: 406, end: 414 },
						},
						loc: { start: 406, end: 415 },
					},
					directives: [],
					loc: { start: 395, end: 415 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 418, end: 427 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 429, end: 437 },
							},
							loc: { start: 429, end: 437 },
						},
						loc: { start: 429, end: 438 },
					},
					directives: [],
					loc: { start: 418, end: 438 },
				},
			],
			loc: { start: 314, end: 440 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 446, end: 451 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 441, end: 451 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 460, end: 468 },
			},
			directives: [],
			loc: { start: 453, end: 468 },
		},
	],
	loc: { start: 0, end: 469 },
} as unknown as DocumentNode;
