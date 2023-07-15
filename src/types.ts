type OptionalKeys<T> = {
	[K in keyof T]-?: T[K] extends
		| { __typename?: string }
		| Array<{ __typename?: string }>
		? K
		: never;
}[keyof T];

type MakeNestedRelationsOptional<T extends object> = {
	[K in keyof Pick<T, OptionalKeys<T>>]?: MakeNestedRelationsOptional<
		T[K]
	>;
} & {
	[K in keyof Omit<T, OptionalKeys<T>>]: T[K];
};

// export type Mapper<T> = T extends object
// 	? MakeNestedRelationsOptional<T>
// 	: T;
export type Mapper<T> = T;

export type Context = {
	prisma: import("@prisma/client").PrismaClient;
};
