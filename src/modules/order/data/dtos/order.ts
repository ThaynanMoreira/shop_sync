export type OrderDTO = {
  id: number;
  currency: string;
  customer_email: string;
  status: string;
  total_price: number;
  products: Product[];
  created_at: Date;
  updated_at: Date;
};

interface Product {
  id: number;
  title: string;
  price: number;
}
