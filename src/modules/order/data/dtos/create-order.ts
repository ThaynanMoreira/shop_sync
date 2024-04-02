export type CreateOrderDTO = {
  currency: string;
  customer_email: string;
  status: string;
  total_price: number;
  products: number[];
};
