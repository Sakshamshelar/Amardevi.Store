export interface ProductVariant {
  id: string;
  weight: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  onSale?: boolean;
  variants?: ProductVariant[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: 'cod' | 'online';
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'confirmed' | 'delivered';
}