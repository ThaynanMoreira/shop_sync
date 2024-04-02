import { PrismaClient } from "@prisma/client";
import { CreateOrderController } from "../../infra/controllers/create-order";
import { CreateOrderUsecase } from "../../data/usecases/create-order";
import { PrismaOrderRepository } from "../../infra/repositories/prisma-order";

const prismaClient = new PrismaClient();

const prismaOrderRepository = new PrismaOrderRepository(prismaClient);
const createOrderUsecase = new CreateOrderUsecase(prismaOrderRepository);
const createOrderController = new CreateOrderController(createOrderUsecase);

export { createOrderController };
