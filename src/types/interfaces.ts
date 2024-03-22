import { setState } from "./types";

export interface CarDPreviewInfo {
  image: string;
  price: number;
  title: string;
  category?: string;
  description?: string;
}

export interface ResponseObject extends CarDPreviewInfo {
  id: number;
}

export interface cartItemsData {
  [title: string]: [number, number, string];
}

export interface ItemQuantityHandler {
  (
    totalPrice: number,
    setTotalPrice: setState<number>,
    setTotalItems: setState<number>,
    itemQuantities: cartItemsData,
    setItemQuantities: setState<cartItemsData>,
    itemID: string,
    increment: boolean,
    price: number,
    image: string
  ): void;
}

export interface OutletProps {
  itemQuantities: cartItemsData;
  setItemQuantities: setState<cartItemsData>;
  query: string;
  setQuery: setState<string>;
  isFetched: boolean;
  setIsfetched: setState<boolean>;
  fetchedData: Array<ResponseObject>;
  setFetchedData: setState<Array<ResponseObject>>;
  setTotalItems: setState<number>;
  handleItemQuentity: ItemQuantityHandler;
  totalPrice: number;
  setTotalPrice: setState<number>;
  displayClickSuggestion: boolean;
  setDisplayClickSuggestion: setState<boolean>;
}
