export interface OrderModel {
  id: number;
  currency: string;
  customer_email: string;
  status: Status;
  total_price: number;
  products: Product[];
  created_at: Date;
  updated_at: Date;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

export enum Status {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}
