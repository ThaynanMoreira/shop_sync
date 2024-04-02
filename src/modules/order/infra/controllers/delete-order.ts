import { DeleteOrderUsecase } from "../../data/usecases/delete-order";

export class DeleteOrderController {
  constructor(private deleteOrderUsecase: DeleteOrderUsecase) {}

  async handle(id: number): Promise<void> {
    return this.deleteOrderUsecase.execute(id);
  }
}
