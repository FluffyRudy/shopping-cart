import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

function handleItemQuentity(
  setTotalItems,
  itemQuantities,
  setItemQuantities,
  itemID,
  increment,
  price,
  image
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
  setTotalItems((prevQuantity) =>
    Math.max(increment ? prevQuantity + 1 : prevQuantity - 1, 0)
  );
}

export default function Root() {
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [query, setQuery] = useState("");
  const [isFetched, setIsfetched] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

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
        }}
      />
    </div>
  );
}
