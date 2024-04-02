import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Users
  await prisma.user.create({
    data: {
      email: 'test1@example.com',
      password: 'password1',
      name: 'Test User 1',
    },
  });

  await prisma.user.create({
    data: {
      email: 'test2@example.com',
      password: 'password2',
      name: 'Test User 2',
    },
  });

  // Orders
  await prisma.order.create({
    data: {
      currency: 'USD',
      customer_email: 'test1@example.com',
      status: 'PENDING',
      total_price: 100,
    },
  });

  await prisma.order.create({
    data: {
      currency: 'USD',
      customer_email: 'test2@example.com',
      status: 'PENDING',
      total_price: 200,
    },
  });

  // Products
  await prisma.product.create({
      data: {
        title: 'Product 1',
        description: 'Description for Product 1',
        price: 100,
        type: 'DIGITAL',
        vendor: 'Vendor 1',
      },
    });
    
    await prisma.product.create({
      data: {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 200,
        type: 'DIGITAL',
        vendor: 'Vendor 1',
      },
    });

}
  
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });