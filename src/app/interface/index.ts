export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;
}

export interface IAuth {
  id: number;
  username: string;
  email: number;
  password: string;
}
