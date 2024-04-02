import { PrismaClient } from "@prisma/client";
import { FindOrderController } from "../../infra/controllers/find-order";
import { FindOrderUsecase } from "../../data/usecases/find-order";
import { PrismaOrderRepository } from "../../infra/repositories/prisma-order";

const prismaClient = new PrismaClient();

const prismaOrderRepository = new PrismaOrderRepository(prismaClient);
const findOrderUsecase = new FindOrderUsecase(prismaOrderRepository);
const findOrderController = new FindOrderController(findOrderUsecase);

export { findOrderController };
