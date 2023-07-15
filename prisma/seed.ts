import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5; // Number of products to create
const reviewsCount = 2; // Number of reviews per product

for (let i = 0; i < productsCount; i++) {
	const name = faker.commerce.productName();

	const createdProduct = await prisma.product.create({
		data: {
			name: name,
			slug: faker.helpers.slugify(name).toLowerCase(),
			description: faker.commerce.productDescription(),
			price: Number(faker.commerce.price()) * 100,
			image: faker.image.url(),
		},
	});
	console.log(`Created product with id: ${createdProduct.id}`);

	for (let j = 0; j < reviewsCount; j++) {
		const createdReview = await prisma.review.create({
			data: {
				title: faker.lorem.sentence(),
				description: faker.lorem.paragraph(),
				rating: faker.number.int({ min: 1, max: 5 }),
				product: {
					connect: {
						id: createdProduct.id,
					},
				},
			},
		});
		console.log(`Created review with id: ${createdReview.id}`);
	}
}
