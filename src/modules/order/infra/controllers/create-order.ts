import { CreateOrderUsecase } from "../../data/usecases/create-order";
import { OrderModel } from "../../data/models/order";

export class CreateOrderController {
  constructor(private createOrderUsecase: CreateOrderUsecase) {}

  async handle(order: OrderModel): Promise<OrderModel> {
    return this.createOrderUsecase.execute(order);
  }
}
