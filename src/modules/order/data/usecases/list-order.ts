import { IOrderRepository } from "../ports/order-repository";
import { OrderModel } from "../models/order";

export class ListOrderUsecase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(): Promise<OrderModel[]> {
    return this.orderRepository.findAll();
  }
}
