import { ListOrderUsecase } from "../../data/usecases/list-order";
import { OrderModel } from "../../data/models/order";

export class ListOrderController {
  constructor(private listOrderUsecase: ListOrderUsecase) {}

  async handle(): Promise<OrderModel[]> {
    return this.listOrderUsecase.execute();
  }
}
