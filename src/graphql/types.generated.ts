import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename"
				? T[P]
				: never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Image = {
	__typename?: "Image";
	url: Scalars["String"]["output"];
};

export type Product = {
	__typename?: "Product";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<Image>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	reviews: Array<Review>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type Query = {
	__typename?: "Query";
	product?: Maybe<Product>;
	products: Array<Product>;
};

export type QueryProductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryProductsArgs = {
	first: Scalars["Int"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Review = {
	__typename?: "Review";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Int"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
	TResult,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
	TResult,
	TParent,
	TContext,
	TArgs,
> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> =
	(
		parent: TParent,
		args: TArgs,
		context: TContext,
		info?: GraphQLResolveInfo,
	) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<
	TResult,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<
			TResult,
			TKey,
			TParent,
			TContext,
			TArgs
	  >
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	DateTime: ResolverTypeWrapper<
		Mapper<Scalars["DateTime"]["output"]>
	>;
	Image: ResolverTypeWrapper<Mapper<Image>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Mapper<Review>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	Image: Mapper<Image>;
	String: Mapper<Scalars["String"]["output"]>;
	Product: Mapper<Product>;
	ID: Mapper<Scalars["ID"]["output"]>;
	Int: Mapper<Scalars["Int"]["output"]>;
	Query: {};
	Review: Mapper<Review>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export type ImageResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Image"] = ResolversParentTypes["Image"],
> = {
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	createdAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	images?: Resolver<
		Array<ResolversTypes["Image"]>,
		ParentType,
		ContextType
	>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reviews?: Resolver<
		Array<ResolversTypes["Review"]>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryProductArgs, "id">
	>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryProductsArgs, "first">
	>;
};

export type ReviewResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	createdAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	DateTime?: GraphQLScalarType;
	Image?: ImageResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
};
