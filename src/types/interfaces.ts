export interface ResponseObject {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface cartItemsData {
  [title: string]: [number, number, string];
}
