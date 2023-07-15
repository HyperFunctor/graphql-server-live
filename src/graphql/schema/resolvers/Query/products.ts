import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<
	QueryResolvers["products"]
> = async (_parent, args, ctx) => {
	args.first = args.first ?? 20;
	args.skip = args.skip ?? 0;

	const products = await ctx.prisma.product.findMany({
		take: args.first,
		skip: args.skip,
	});
	return products.map((product) => ({
		id: product.id,
		name: product.name,
		slug: product.slug,
		description: product.description,
		price: product.price,
		images: [{ url: product.image }],
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,
		reviews: [],
	}));
};
