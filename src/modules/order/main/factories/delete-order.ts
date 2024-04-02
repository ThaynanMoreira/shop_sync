import { PrismaClient } from "@prisma/client";
import { DeleteOrderController } from "../../infra/controllers/delete-order";
import { DeleteOrderUsecase } from "../../data/usecases/delete-order";
import { PrismaOrderRepository } from "../../infra/repositories/prisma-order";

const prismaClient = new PrismaClient();

const prismaOrderRepository = new PrismaOrderRepository(prismaClient);
const deleteOrderUsecase = new DeleteOrderUsecase(prismaOrderRepository);
const deleteOrderController = new DeleteOrderController(deleteOrderUsecase);

export { deleteOrderController };
