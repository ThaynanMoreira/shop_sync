import { PrismaClient, Order, Product, Status } from "@prisma/client";
import {
  IOrderRepository,
  UpdateOrderModel
} from "../../data/ports/order-repository";
import { OrderModel, Status as StatusModel } from "../../data/models/order";

export class PrismaOrderRepository implements IOrderRepository {
  constructor(private prismaClient: PrismaClient) {}

  async create(order: Omit<OrderModel, "id" | "status">): Promise<OrderModel> {
    const createdOrder = await this.prismaClient.order.create({
      data: {
        currency: order.currency,
        customer_email: order.customer_email,
        total_price: order.total_price,
        products: {
          connect: order.products.map((product) => ({ id: product.id }))
        }
      },
      include: {
        products: true
      }
    });

    return this.mapOrderToModel(createdOrder);
  }

  async update(id: number, order: UpdateOrderModel): Promise<OrderModel> {
    const updatedOrder = await this.prismaClient.order.update({
      where: { id },
      data: {
        customer_email: order.customer_email,
        status: Status[order.status]
      },
      include: {
        products: true
      }
    });

    return this.mapOrderToModel(updatedOrder);
  }

  async delete(id: number): Promise<void> {
    await this.prismaClient.order.delete({
      where: { id }
    });
  }

  async find(id: number): Promise<OrderModel | null> {
    const foundOrder = await this.prismaClient.order.findUnique({
      where: { id },
      include: {
        products: true
      }
    });

    return foundOrder ? this.mapOrderToModel(foundOrder) : null;
  }

  async findAll(): Promise<OrderModel[]> {
    const allOrders = await this.prismaClient.order.findMany({
      include: {
        products: true
      }
    });

    return allOrders.map(this.mapOrderToModel);
  }

  private mapOrderToModel(order: Order & { products: Product[] }): OrderModel {
    return {
      id: order.id,
      currency: order.currency,
      customer_email: order.customer_email,
      status: StatusModel[order.status],
      total_price: order.total_price.toNumber(),
      created_at: order.created_at,
      updated_at: order.updated_at,
      products: order?.products?.map((product) => ({
        id: product.id,
        price: product.price.toNumber(),
        title: product.title
      }))
    };
  }
}
