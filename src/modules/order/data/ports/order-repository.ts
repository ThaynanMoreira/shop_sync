import { OrderModel } from "../models/order";

export type CreateOrderModel = Pick<
  OrderModel,
  "currency" | "customer_email" | "total_price"
> & { products: number[] };
export type UpdateOrderModel = Pick<OrderModel, "customer_email" | "status">;

export interface IOrderRepository {
  create(order: CreateOrderModel): Promise<OrderModel>;
  update(id: number, order: UpdateOrderModel): Promise<OrderModel>;
  delete(id: number): Promise<void>;
  find(id: number): Promise<OrderModel | null>;
  findAll(): Promise<OrderModel[]>;
}
