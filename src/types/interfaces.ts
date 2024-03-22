import { setState } from "./types";

export interface CarDPreviewInfo {
  image: string;
  price: number;
  title: string;
}

export interface ResponseObject extends CarDPreviewInfo {
  id: number;
  category: string;
  description: string;
}

export interface cartItemsData {
  [title: string]: [number, number, string];
}

export interface ItemQuantityHandler extends CarDPreviewInfo {
  (
    totalPrice: number,
    setTotalPrice: setState<number>,
    setTotalItems: setState<number>,
    itemQuantities: cartItemsData,
    setItemQuantities: setState<cartItemsData>,
    itemID: string,
    increment: boolean
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
