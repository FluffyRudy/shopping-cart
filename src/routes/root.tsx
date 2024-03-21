import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { ResponseObject, cartItemsData } from "types/interfaces";
import { setState } from "types/types";

function handleItemQuentity(
  totalPrice: number,
  setTotalPrice: setState<number>,
  setTotalItems: setState<number>,
  itemQuantities: cartItemsData,
  setItemQuantities: setState<cartItemsData>,
  itemID: string,
  increment: boolean,
  price: number,
  image: string
) {
  if (increment === false && !itemQuantities[itemID]) return;
  setItemQuantities((prevQuantities) => {
    const oldQuantity = prevQuantities[itemID] ? prevQuantities[itemID][0] : 0;
    const newQuantity = oldQuantity + (increment ? 1 : -1);
    return {
      ...prevQuantities,
      [itemID]: [Math.max(newQuantity, 0), price, image],
    };
  });

  setTotalPrice(totalPrice + (increment ? price : -price));

  setTotalItems((prevQuantity) =>
    Math.max(increment ? prevQuantity + 1 : prevQuantity - 1, 0)
  );
}

export default function Root() {
  const [itemQuantities, setItemQuantities] = useState<cartItemsData>({});
  const [totalItems, setTotalItems] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [isFetched, setIsfetched] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<Array<ResponseObject>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [displayClickSuggestion, setDisplayClickSuggestion] =
    useState<boolean>(true);

  return (
    <div className=''>
      <Header totalItems={totalItems} />
      <Outlet
        context={{
          itemQuantities,
          setItemQuantities,
          query,
          setQuery,
          isFetched,
          setIsfetched,
          fetchedData,
          setFetchedData,
          setTotalItems,
          handleItemQuentity,
          totalPrice,
          setTotalPrice,
          displayClickSuggestion,
          setDisplayClickSuggestion,
        }}
      />
    </div>
  );
}
