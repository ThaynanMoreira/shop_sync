import { PrismaClient } from "@prisma/client";
import { ListOrderController } from "../../infra/controllers/list-order";
import { ListOrderUsecase } from "../../data/usecases/list-order";
import { PrismaOrderRepository } from "../../infra/repositories/prisma-order";

const prismaClient = new PrismaClient();

const prismaOrderRepository = new PrismaOrderRepository(prismaClient);
const listOrderUsecase = new ListOrderUsecase(prismaOrderRepository);
const listOrderController = new ListOrderController(listOrderUsecase);

export { listOrderController };
