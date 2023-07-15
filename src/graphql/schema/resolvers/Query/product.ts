import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const product = await ctx.prisma.product.findUnique({
		where: { id: arg.id },
	});
	if (!product) {
		return null;
	}

	return {
		id: product.id,
		name: product.name,
		slug: product.slug,
		description: product.description,
		price: product.price,
		images: [{ url: product.image }],
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,
		reviews: [],
	};
};
