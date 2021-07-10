export interface Product{
    id: string;
    name: string;
    description: string;
    image_url: string;
    slug: string;
    price: number;
    created_at: string;
}

export const products: Product[] = [
    {
      id: "uuid",
      name: "Calça Colcci maculina",
      description: "Calça sarja Colcci de alta qualidade",
      price: 198.90,
      image_url: "https://source.unsplash.com/random?product" + Math.random(),
      slug: "calca-colcci-masculina",
      created_at: "2021-07-08T00:00:00"
    },
    {
        id: "uuid",
        name: "Calça Colcci unisex",
        description: "Calça sarja Colcci de alta qualidade",
        price: 398.90,
        image_url: "https://source.unsplash.com/random?product" + Math.random(),
        slug: "calca-colcci-unisex",
        created_at: "2021-07-08T00:00:00"
    },
    {
        id: "uuid",
        name: "Calça Colcci fem",
        description: "Calça sarja Colcci de alta qualidade",
        price: 98.90,
        image_url: "https://source.unsplash.com/random?product" + Math.random(),
        slug: "calca-colcci-fem",
        created_at: "2021-07-08T00:00:00"
    }
  ]

  export interface CreditCard {
    number: string;
    name: string;
    expiration_month: number;
    expiration_year: number;
    cvv: string;
  }
  
  export enum OrderStatus {
    Approved = "approved",
    Pending = "pending",
  }
  
  export interface OrderItem {
    product: Product;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    id: string;
    credit_card: Omit<CreditCard, "cvv" | "name">;
    items: OrderItem[];
    status: OrderStatus;
  }