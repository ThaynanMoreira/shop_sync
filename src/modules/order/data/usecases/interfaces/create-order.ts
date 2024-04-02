import { OrderDTO } from "../../dtos/order";
import { Either } from "../../../../../app/helpers/either";
import { CreateOrderDTO } from "../../dtos/create-order";
import { ApiError } from "../../../../../app/helpers/api-error";

export interface ICreateOrderUsecase {
  execute(dto: CreateOrderDTO): Promise<Either<ApiError, OrderDTO>>;
}
