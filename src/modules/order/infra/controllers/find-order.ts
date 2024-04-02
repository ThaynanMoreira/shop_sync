import { FindOrderUsecase } from "../../data/usecases/find-order";
import { OrderModel } from "../../data/models/order";

export class FindOrderController {
  constructor(private findOrderUsecase: FindOrderUsecase) {}

  async handle(id: number): Promise<OrderModel> {
    return this.findOrderUsecase.execute(id);
  }
}
