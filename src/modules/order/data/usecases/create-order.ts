import { IOrderRepository } from "../ports/order-repository";
import { OrderModel } from "../models/order";
import { ICreateOrderUsecase } from "./interfaces/create-order";
import { OrderDTO } from "../dtos/order";
import { Either, right } from "../../../../app/helpers/either";
import { CreateOrderDTO } from "../dtos/create-order";
import { ApiError } from "../../../../app/helpers/api-error";

export class CreateOrderUsecase implements ICreateOrderUsecase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(dto: CreateOrderDTO): Promise<Either<ApiError, OrderDTO>> {
    const created = await this.orderRepository.create({
      ...dto
    });

    return right(created);
  }
}
