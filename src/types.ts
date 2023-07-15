type OptionalKeys<T> = {
	[K in keyof T]-?: T[K] extends { __typename?: infer U }
		? K
		: T[K] extends Array<infer X extends { __typename?: infer Z }>
		? K
		: never;
}[keyof T];

type MakeNestedRelationsOptional<T extends object> = Partial<
	Pick<T, OptionalKeys<T>>
> &
	Omit<T, OptionalKeys<T>>;

export type Mapper<T> = T extends object
	? MakeNestedRelationsOptional<T>
	: T;
