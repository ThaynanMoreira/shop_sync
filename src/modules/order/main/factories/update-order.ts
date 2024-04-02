import { PrismaClient } from "@prisma/client";
import { UpdateOrderController } from "../../infra/controllers/update-order";
import { UpdateOrderUsecase } from "../../data/usecases/update-order";
import { PrismaOrderRepository } from "../../infra/repositories/prisma-order";

const prismaClient = new PrismaClient();

const prismaOrderRepository = new PrismaOrderRepository(prismaClient);
const updateOrderUsecase = new UpdateOrderUsecase(prismaOrderRepository);
const updateOrderController = new UpdateOrderController(updateOrderUsecase);

export { updateOrderController };
